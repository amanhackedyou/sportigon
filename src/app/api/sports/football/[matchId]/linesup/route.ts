import { getFromCache, getRedisClient, setToCache } from "@/libs/redis";
import { NextResponse } from "next/server";
import { getLinesupByMatchId } from "sportigon_sports/football";

const getRedisKey = (matchId: string) => `football:linesup:${matchId}`

export const GET = async (request: Request, { params }: { params: { matchId: string } }) => {
    const { matchId } = params;

    if (!matchId || isNaN(parseInt(matchId))) {
        return NextResponse.json({ message: "Invalid matchId" }, { status: 400 });
    }

    const redisKey = getRedisKey(matchId);

    // Try to get from Redis cache first
    const cachedLinesup = await getFromCache(redisKey);
    if (cachedLinesup) {
        return NextResponse.json(cachedLinesup, { status: 200 });
    }

    const linesup = await getLinesupByMatchId(parseInt(matchId));

    if (!linesup.statusCode) {
        // Store in Redis for 1 hour
        try {
            await setToCache(redisKey, linesup, 300);
        } catch (error) {
            console.error("Redis error: ", error);
        }
    }

    return NextResponse.json(linesup, { status: linesup.statusCode || 200 });
}