import { NextResponse } from "next/server";
export const GET = async (req, { params }) => {
    const { matchId } = params;
    return NextResponse.json({ status: "ok", matchId });
    // const redis = getRedisClient();
    // const key = `match:${matchId}`;
    // const cachedMatch = await redis.get(key);
    // if (cachedMatch) {
    //     return NextResponse.json(JSON.parse(cachedMatch));
    // }
    // const match = await getMatchById(matchId);
    // await redis.set(key, JSON.stringify(match));
    // return NextResponse.json(match);
};
//# sourceMappingURL=route.js.map