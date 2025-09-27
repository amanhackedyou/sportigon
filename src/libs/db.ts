import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
    throw new Error("Please define the MONGO_URI in .env.local");
}

interface MongooseCache {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
}

// Use global cache to prevent multiple connections in development
declare global {
    var mongooseCache: MongooseCache | undefined;
}

const cache: MongooseCache = global.mongooseCache || { conn: null, promise: null };

export async function connectDB(): Promise<mongoose.Connection> {
    if (cache.conn) return cache.conn;

    if (!cache.promise) {
        cache.promise = mongoose
            .connect(MONGO_URI, {})
            .then((mongoose) => mongoose.connection);
    }

    cache.conn = await cache.promise;
    global.mongooseCache = cache; // Store in global cache

    return cache.conn;
}