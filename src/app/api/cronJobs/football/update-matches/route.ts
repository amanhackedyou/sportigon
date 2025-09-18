import { updateMatchesCache } from "@/services/redis/updateMatches";
import { DateTime } from "luxon";


import { NextRequest, NextResponse } from "next/server";
import { getMatches } from "sportigon_sports/football";

export const GET = async (req: NextRequest) => {
    const date = DateTime.now().setZone("Etc/UTC").toFormat('yyyy-MM-dd');
    // const date = "2025-09-01";
    console.log(date);

    console.log("Cron job to update matches executed at", date);

    updateMatchesCache(date);

    return NextResponse.json({ status: "ok", msg: "Cron job to update matches endpoint" });
}