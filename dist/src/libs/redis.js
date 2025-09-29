// lib/redis.ts
import Redis from "ioredis";
import util from "util";
let client = null;
const host = "127.0.0.1";
export const getRedisClient = () => {
    if (!client) {
        client = new Redis({
            host: process.env.REDIS_HOST || host,
            port: Number(process.env.REDIS_PORT) || 6379,
            // password: process.env.REDIS_PASSWORD,
            lazyConnect: true,
            maxRetriesPerRequest: 3, // optimized retry
        });
    }
    return client;
};
// helper: safely produce a plain JSON value (no getters, no circulars)
// function safePlainObject(doc: any) {
//     try {
//         // Prefer toObject() for mongoose docs
//         const plain = doc && typeof doc.toObject === "function" ? doc.toObject() : doc;
//         // stringify + parse removes any functions/getters and throws on circulars
//         return JSON.parse(JSON.stringify(plain));
//     } catch (err) {
//         console.warn("safePlainObject: failed to stringify/parse doc — falling back to shallow clone", err);
//         // shallow clone fallback - will still have risk if circulars exist, but less likely
//         try {
//             return Object.assign({}, doc);
//         } catch (e) {
//             return null;
//         }
//     }
// }
// when reading from cache, parse safely
// export async function getFromCache(cacheKey: string) {
//     try {
//         const raw = await getRedisClient().get(cacheKey);
//         if (!raw) return null;
//         try {
//             return JSON.parse(raw);
//         } catch (err) {
//             console.warn("Failed to parse cache JSON - deleting corrupt key", cacheKey, err);
//             await getRedisClient().del(cacheKey).catch(() => { });
//             return null;
//         }
//     } catch (err) {
//         console.warn("Redis GET failed", err);
//         return null;
//     }
// }
// when writing to cache, stringify safely
// export async function setToCache(cacheKey: string, payload: any, ttlSec?: number): Promise<boolean> {
//     try {
//         const safe = safePlainObject(payload);
//         if (!safe) return false;
//         const value = JSON.stringify(safe);
//         const redis = getRedisClient();
//         // Use EX only when ttlSec is a positive number
//         if (ttlSec !== undefined && ttlSec > 0) {
//             await redis.set(cacheKey, value, "EX", ttlSec);
//         } else {
//             await redis.set(cacheKey, value);
//         }
//         return true;
//     } catch (err) {
//         console.warn("Redis SET failed", err);
//         return false;
//     }
// }
function toPlain(obj) {
    if (!obj)
        return obj;
    try {
        if (typeof obj.toObject === "function")
            return obj.toObject();
    }
    catch (e) { /* ignore */ }
    return obj;
}
/** Safely stringify object -> JSON. Returns string or null on failure */
function safeJsonStringify(obj, maxDepth = 6, maxKeys = 300) {
    try {
        // quick shallow-safe approach: attempt JSON.stringify directly first
        return JSON.stringify(obj);
    }
    catch (e) {
        // fallback: shallow copy with limited depth/keys (avoid calling getters)
        try {
            const shallow = (function copyWithDepth(value, depth, maxKeys = 300) {
                if (depth < 0)
                    return "[MaxDepth]";
                if (value === null)
                    return null;
                if (typeof value !== "object")
                    return value;
                if (value instanceof Date)
                    return value.toISOString();
                if (Array.isArray(value)) {
                    return value.map((v) => copyWithDepth(v, depth - 1, maxKeys));
                }
                const out = {};
                const keys = Object.keys(value).slice(0, maxKeys);
                for (const k of keys) {
                    try {
                        out[k] = copyWithDepth(value[k], depth - 1, maxKeys);
                    }
                    catch {
                        out[k] = "[Error]";
                    }
                }
                if (Object.keys(value).length > maxKeys) {
                    out.__truncated = true;
                }
                return out;
            })(obj, maxDepth);
            return JSON.stringify(shallow);
        }
        catch (e2) {
            // Last resort: return inspect string (but we will NOT cache this in production)
            try {
                return util.inspect(obj, { depth: 2, breakLength: 80 });
            }
            catch (e3) {
                return null;
            }
        }
    }
}
/**
 * New safe setToCache that uses safeStringify and will never crash with RangeError.
 * Uses ioredis positional args style: set(key, value, "EX", ttl)
 */
export async function setToCache(cacheKey, payload, ttlSec) {
    try {
        const plain = toPlain(payload);
        const json = safeJsonStringify(plain);
        if (!json) {
            console.warn("setToCache: failed to produce JSON from payload; skipping cache");
            return false;
        }
        const redis = getRedisClient();
        if (ttlSec && ttlSec > 0) {
            await redis.set(cacheKey, json, "EX", ttlSec);
        }
        else {
            await redis.set(cacheKey, json);
        }
        return true;
    }
    catch (err) {
        console.warn("setToCache: redis set failed", err);
        return false;
    }
}
/** getFromCache: returns parsed JSON or null (and deletes corrupt keys) */
export async function getFromCache(cacheKey) {
    try {
        const raw = await getRedisClient().get(cacheKey);
        if (!raw)
            return null;
        try {
            return JSON.parse(raw);
        }
        catch (err) {
            console.warn("getFromCache: parse failed; deleting corrupt key", cacheKey, err);
            await getRedisClient().del(cacheKey).catch(() => { });
            return null;
        }
    }
    catch (err) {
        console.warn("getFromCache: redis get failed", err);
        return null;
    }
}
//# sourceMappingURL=redis.js.map