import { updateMatchesCache } from "@/services/redis/updateMatches";
import { DateTime } from "luxon";
import { NextResponse } from "next/server";
export const GET = async (req) => {
    const date = DateTime.now().setZone("Etc/UTC").toFormat('yyyy-MM-dd');
    // const date = "2025-09-01";
    console.log(date);
    console.log("Cron job to update matches executed at", date);
    updateMatchesCache(date);
    return NextResponse.json({ status: "ok", msg: "Cron job to update matches endpoint" });
};
//# sourceMappingURL=route.js.map