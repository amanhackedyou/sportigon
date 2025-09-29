import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    throw new Error("Please define the MONGO_URI in .env.local");
}
const cache = global.mongooseCache || { conn: null, promise: null };
export async function connectDB() {
    if (cache.conn)
        return cache.conn;
    if (!cache.promise) {
        cache.promise = mongoose
            .connect(MONGO_URI, {})
            .then((mongoose) => mongoose.connection);
    }
    cache.conn = await cache.promise;
    global.mongooseCache = cache; // Store in global cache
    return cache.conn;
}
//# sourceMappingURL=db.js.map