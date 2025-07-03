import { checkBlockAccess } from "@/libs/checkBlockAccess";
import { withAuth } from "@/libs/withAuth";
import { FollowModel } from "@/models/Follow";
import { IUser, UserModel } from "@/models/User";
import { verifyJWToken } from "@/utils/jwtUtils";
import mongoose from "mongoose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = withAuth(async (user: IUser, req: Request, params: any) => {
    const prms = await params;
    const targetUserId = prms.userId;
    let isMyAccount = false;

    if (user._id == targetUserId) {
        isMyAccount = true;
    }



    if (!mongoose.Types.ObjectId.isValid(targetUserId)) {
        return NextResponse.json({ status: "error", message: "Bad request, invalid user Id." }, { status: 400 })
    }

    const targetUser = await UserModel.findById(targetUserId);

    if (!targetUser) {
        return NextResponse.json({ status: "error", message: "User not found with the given Id." }, { status: 404 })
    }

    const blockCheck = await checkBlockAccess(`${user._id}`, targetUserId);
    if (blockCheck) return blockCheck;

    return NextResponse.json({
        status: "ok",
        userId: user._id,
        isMyAccount: isMyAccount,
        user: targetUser
    })
});
