import { getFromCache, setToCache } from "@/libs/redis";
import { FootballMatchModel } from "@/models/Football/Match";
import { getMatchById as getMatchById_ } from "sportigon_sports/football";
const STALE_MS = 30_000; // 30 seconds
const CACHE_TTL = 30; // seconds for Redis TTL
const REDIS_KEY_PREFIX = "matches:football:";
function isInProgress(state) {
    const inProgressStates = [
        "First half",
        "Second half",
        "Extra time",
        "Break time",
        "Penalties",
        "In progress",
    ];
    return inProgressStates.includes(state);
}
const getMatch = async (matchId) => {
    const resp = await getMatchById_(matchId);
    if (!resp || resp.statusCode === 400 || resp.statusCode === 500)
        return null;
    return resp[0];
};
// export const getMatchById = async (matchId: number) => {
//     let match = null;
//     match = await FootballMatchModel.findOne({ id: matchId });
//     if (match) {
//         const isMathchInProgress = isInProgress(match.state.description as MatchState);
//         console.log("isMathchInProgress", isMathchInProgress);
//         return match
//     };
//     const matchData = await getMatch(matchId);
//     if (!matchData) return null;
//     try {
//         match = await FootballMatchModel.create(matchData);
//     } catch (err) {
//         return null;
//     }
//     return match;
// }
// export const getMatchById = async (matchId: number) => {
//     let match = await FootballMatchModel.findOne({ id: matchId }).exec();
//     if (match) {
//         const stateDesc = match.state?.description ?? null;
//         const isMatchInProgress = stateDesc ? isInProgress(stateDesc as MatchState) : false;
//         console.log("isMatchInProgress", isMatchInProgress);
//         if (isMatchInProgress) {
//             // use only updatedAt as you requested
//             const lastUpdated = match.updatedAt ? new Date(match.updatedAt) : null;
//             const isStale = !lastUpdated || (Date.now() - lastUpdated.getTime() > STALE_MS);
//             if (isStale) {
//                 console.log(`Match ${matchId} is in progress and stale (updatedAt=${lastUpdated}). Refreshing...`);
//                 const matchData = await getMatch(matchId);
//                 if (!matchData) {
//                     console.warn("Remote getMatch returned no data while trying to refresh in-progress match.");
//                     return match;
//                 }
//                 try {
//                     // Ensure updatedAt is set so DB reflects fresh time
//                     // matchData.updatedAt = new Date();
//                     const updated = await FootballMatchModel.findOneAndUpdate(
//                         { id: matchId },
//                         matchData,
//                         { new: true, runValidators: true }
//                     ).exec();
//                     // return updated doc if successful, otherwise fallback to existing match
//                     return updated ?? match;
//                 } catch (err) {
//                     console.error("Failed to update match after fetching fresh data:", err);
//                     return match;
//                 }
//             }
//             // not stale -> return DB match
//             return match;
//         }
//         // not in progress -> return DB match
//         return match;
//     }
//     // not found in DB -> fetch and create
//     const matchData = await getMatch(matchId);
//     if (!matchData) return null;
//     try {
//         // Optionally set updatedAt on create as well
//         // matchData.updatedAt = new Date();
//         match = await FootballMatchModel.create(matchData);
//         return match;
//     } catch (err) {
//         console.error("Failed to create match in DB:", err);
//         return null;
//     }
// };
// export const getMatchById = async (matchId: number) => {
//     const redisClient = getRedisClient();
//     const cacheKey = `${REDIS_KEY_PREFIX}${matchId}`;
//     // 1) Try Redis cache
//     try {
//         const cached = await redisClient.get(cacheKey);
//         if (cached) {
//             // Return cached parsed object immediately
//             try {
//                 const parsed = JSON.parse(cached);
//                 console.log(`Cache hit for match ${matchId}`);
//                 return parsed;
//             } catch (err) {
//                 console.warn("Failed to parse cached match JSON — falling through to DB", err);
//                 // continue to DB read
//             }
//         }
//     } catch (err) {
//         console.warn("Redis GET failed — continuing without cache", err);
//         // continue to DB read
//     }
//     // 2) Read from DB
//     let match = await FootballMatchModel.findOne({ id: matchId }).exec();
//     if (match) {
//         const stateDesc = match.state?.description ?? null;
//         const isMatchInProgress = stateDesc ? isInProgress(stateDesc as MatchState) : false;
//         console.log("isMatchInProgress", isMatchInProgress);
//         if (isMatchInProgress) {
//             const lastUpdated = match.updatedAt ? new Date(match.updatedAt) : null;
//             const isStale = !lastUpdated || Date.now() - lastUpdated.getTime() > STALE_MS;
//             if (isStale) {
//                 console.log(`Match ${matchId} is in progress and stale (updatedAt=${lastUpdated}). Refreshing...`);
//                 // fetch fresh data from remote
//                 const matchData = await getMatch(matchId);
//                 if (!matchData) {
//                     console.warn("Remote getMatch returned no data while trying to refresh in-progress match.");
//                     // set cache from DB and return DB match
//                     try {
//                         await redisClient.set(cacheKey, JSON.stringify(match), "EX", CACHE_TTL);
//                     } catch (err) {
//                         console.warn("Redis SET failed while caching stale DB match", err);
//                     }
//                     return match;
//                 }
//                 try {
//                     // Update DB with fresh matchData. We use findOneAndUpdate to get the updated doc back
//                     const updated = await FootballMatchModel.findOneAndUpdate(
//                         { id: matchId },
//                         matchData,
//                         { new: true, runValidators: true }
//                     ).exec();
//                     const toCache = (updated ?? match).toObject ? (updated ?? match).toObject() : (updated ?? match);
//                     // update cache
//                     try {
//                         await redisClient.set(cacheKey, JSON.stringify(toCache), "EX", CACHE_TTL);
//                     } catch (err) {
//                         console.warn("Redis SET failed while caching updated match", err);
//                     }
//                     return updated ?? match;
//                 } catch (err) {
//                     console.error("Failed to update match after fetching fresh data:", err);
//                     // fallback: cache and return DB match
//                     try {
//                         await redisClient.set(cacheKey, JSON.stringify(match), "EX", CACHE_TTL);
//                     } catch (e) {
//                         console.warn("Redis SET failed while caching DB match on error", e);
//                     }
//                     return match;
//                 }
//             }
//             // not stale -> cache DB match and return it
//             try {
//                 const toCache = match.toObject ? match.toObject() : match;
//                 await redisClient.set(cacheKey, JSON.stringify(toCache), "EX", CACHE_TTL);
//             } catch (err) {
//                 console.warn("Redis SET failed while caching DB match (not stale)", err);
//             }
//             return match;
//         }
//         // not in progress -> cache DB match and return it
//         try {
//             const toCache = match.toObject ? match.toObject() : match;
//             await redisClient.set(cacheKey, JSON.stringify(toCache), "EX", CACHE_TTL);
//         } catch (err) {
//             console.warn("Redis SET failed while caching DB match (not in progress)", err);
//         }
//         return match;
//     }
//     // 3) Not found in DB -> fetch remote and create
//     const matchData = await getMatch(matchId);
//     if (!matchData) return null;
//     try {
//         match = await FootballMatchModel.create(matchData);
//         // cache created match
//         try {
//             const toCache = match.toObject ? match.toObject() : match;
//             await redisClient.set(cacheKey, JSON.stringify(toCache), "EX", CACHE_TTL);
//         } catch (err) {
//             console.warn("Redis SET failed while caching newly created match", err);
//         }
//         return match;
//     } catch (err) {
//         console.error("Failed to create match in DB:", err);
//         return null;
//     }
// };
export const getMatchById = async (matchId) => {
    const cacheKey = `${REDIS_KEY_PREFIX}${matchId}`;
    // 1) Try Redis cache via helper
    try {
        const cached = await getFromCache(cacheKey);
        if (cached) {
            console.log(`Cache hit for match ${matchId}`);
            return cached;
        }
    }
    catch (err) {
        // getFromCache already logs, but keep a safeguard
        console.warn("getMatchById: getFromCache threw", err);
    }
    // 2) Read from DB
    let match = await FootballMatchModel.findOne({ id: matchId }).exec();
    if (match) {
        const stateDesc = match.state?.description ?? null;
        const isMatchInProgress = stateDesc ? isInProgress(stateDesc) : false;
        console.log("isMatchInProgress", isMatchInProgress);
        if (isMatchInProgress) {
            const lastUpdated = match.updatedAt ? new Date(match.updatedAt) : null;
            const isStale = !lastUpdated || Date.now() - lastUpdated.getTime() > STALE_MS;
            if (isStale) {
                console.log(`Match ${matchId} is in progress and stale (updatedAt=${lastUpdated}). Refreshing...`);
                // fetch fresh data from remote
                const matchData = await getMatch(matchId);
                if (!matchData) {
                    console.warn("Remote getMatch returned no data while trying to refresh in-progress match.");
                    // cache DB match (plain) and return DB match
                    try {
                        await setToCache(cacheKey, match, CACHE_TTL);
                    }
                    catch (err) {
                        console.warn("getMatchById: setToCache failed while caching stale DB match", err);
                    }
                    return match;
                }
                try {
                    // Update DB with fresh matchData. Use findOneAndUpdate to get the updated doc back
                    const updated = await FootballMatchModel.findOneAndUpdate({ id: matchId }, matchData, { new: true, runValidators: true }).exec();
                    const toCache = (updated ?? match);
                    // update cache using helper
                    try {
                        await setToCache(cacheKey, toCache, CACHE_TTL);
                    }
                    catch (err) {
                        console.warn("getMatchById: setToCache failed while caching updated match", err);
                    }
                    return updated ?? match;
                }
                catch (err) {
                    console.error("Failed to update match after fetching fresh data:", err);
                    // fallback: cache and return DB match
                    try {
                        await setToCache(cacheKey, match, CACHE_TTL);
                    }
                    catch (e) {
                        console.warn("getMatchById: setToCache failed while caching DB match on update error", e);
                    }
                    return match;
                }
            }
            // not stale -> cache DB match and return it
            try {
                await setToCache(cacheKey, match, CACHE_TTL);
            }
            catch (err) {
                console.warn("getMatchById: setToCache failed while caching DB match (not stale)", err);
            }
            return match;
        }
        // not in progress -> cache DB match and return it
        try {
            await setToCache(cacheKey, match, CACHE_TTL);
        }
        catch (err) {
            console.warn("getMatchById: setToCache failed while caching DB match (not in progress)", err);
        }
        return match;
    }
    // 3) Not found in DB -> fetch remote and create
    const matchData = await getMatch(matchId);
    if (!matchData)
        return null;
    try {
        match = await FootballMatchModel.create(matchData);
        // cache created match
        try {
            await setToCache(cacheKey, match, CACHE_TTL);
        }
        catch (err) {
            console.warn("getMatchById: setToCache failed while caching newly created match", err);
        }
        return match;
    }
    catch (err) {
        console.error("Failed to create match in DB:", err);
        return null;
    }
};
// export const getMatchById = async (matchId: number) => {
//     const cacheKey = `${REDIS_KEY_PREFIX}${matchId}`;
//     // 1) Try Redis cache via helper
//     try {
//         const cached = await getFromCache(cacheKey);
//         if (cached) {
//             console.log(`Cache hit for match ${matchId}`);
//             return cached;
//         }
//     } catch (err) {
//         console.warn("getMatchById: getFromCache threw", err);
//     }
//     // 2) Read from DB (use lean to get a plain object)
//     let match = await FootballMatchModel.findOne({ id: matchId }).lean() as IFMatch | null;
//     if (match) {
//         const stateDesc = match.state?.description ?? null;
//         const isMatchInProgress = stateDesc ? isInProgress(stateDesc as MatchState) : false;
//         console.log("isMatchInProgress", isMatchInProgress);
//         if (isMatchInProgress) {
//             const lastUpdated = match.updatedAt ? new Date(match.updatedAt) : null;
//             const isStale = !lastUpdated || Date.now() - lastUpdated.getTime() > STALE_MS;
//             if (isStale) {
//                 console.log(`Match ${matchId} is in progress and stale (updatedAt=${lastUpdated}). Refreshing...`);
//                 const matchData = await getMatch(matchId);
//                 if (!matchData) {
//                     console.warn("Remote getMatch returned no data while trying to refresh in-progress match.");
//                     try {
//                         await setToCache(cacheKey, match, CACHE_TTL); // match is already a POJO from lean()
//                     } catch (err) {
//                         console.warn("getMatchById: setToCache failed while caching stale DB match", err);
//                     }
//                     return match;
//                 }
//                 try {
//                     // Update DB with fresh matchData. Get updated doc and convert to plain object.
//                     const updatedDoc = await FootballMatchModel.findOneAndUpdate(
//                         { id: matchId },
//                         matchData,
//                         { new: true, runValidators: true }
//                     ).exec();
//                     // convert mongoose doc to plain object if a doc was returned
//                     const toCache = updatedDoc ? (updatedDoc as any).toObject() : match;
//                     try {
//                         await setToCache(cacheKey, toCache, CACHE_TTL);
//                     } catch (err) {
//                         console.warn("getMatchById: setToCache failed while caching updated match", err);
//                     }
//                     return updatedDoc ? toCache : match;
//                 } catch (err) {
//                     console.error("Failed to update match after fetching fresh data:", err);
//                     try {
//                         await setToCache(cacheKey, match, CACHE_TTL);
//                     } catch (e) {
//                         console.warn("getMatchById: setToCache failed while caching DB match on update error", e);
//                     }
//                     return match;
//                 }
//             }
//             // not stale -> cache DB match and return it
//             try {
//                 await setToCache(cacheKey, match, CACHE_TTL);
//             } catch (err) {
//                 console.warn("getMatchById: setToCache failed while caching DB match (not stale)", err);
//             }
//             return match;
//         }
//         // not in progress -> cache DB match and return it
//         try {
//             await setToCache(cacheKey, match, CACHE_TTL);
//         } catch (err) {
//             console.warn("getMatchById: setToCache failed while caching DB match (not in progress)", err);
//         }
//         return match;
//     }
//     // 3) Not found in DB -> fetch remote and create
//     const matchData = await getMatch(matchId);
//     if (!matchData) return null;
//     try {
//         const createdDoc = await FootballMatchModel.create(matchData);
//         const created = (createdDoc as any).toObject();
//         try {
//             await setToCache(cacheKey, created, CACHE_TTL);
//         } catch (err) {
//             console.warn("getMatchById: setToCache failed while caching newly created match", err);
//         }
//         return created;
//     } catch (err) {
//         console.error("Failed to create match in DB:", err);
//         return null;
//     }
// };
//# sourceMappingURL=actions.js.map