import { isBlockedEitherWay } from "@/libs/blockUtils";
import { NextResponse } from "next/server";
export const checkBlockAccess = async (userId, targetUserId) => {
    const blocked = await isBlockedEitherWay(userId, targetUserId);
    if (blocked) {
        return NextResponse.json({
            status: "error",
            message: "Access denied. One of the users has blocked the other.",
        }, { status: 403 });
    }
    return null;
};
//# sourceMappingURL=checkBlockAccess.js.map