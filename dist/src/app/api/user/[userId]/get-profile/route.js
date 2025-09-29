import { checkBlockAccess } from "@/libs/checkBlockAccess";
import { withAuth } from "@/libs/withAuth";
import { UserModel } from "@/models/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const POST = withAuth(async (user, req, params) => {
    const prms = await params;
    let targetUserId = prms.userId;
    let isMyAccount = false;
    if (user._id == targetUserId) {
        isMyAccount = true;
    }
    if (targetUserId === "me") {
        targetUserId = user._id;
        isMyAccount = true;
    }
    if (!mongoose.Types.ObjectId.isValid(targetUserId)) {
        return NextResponse.json({ status: "error", message: "Bad request, invalid user Id." }, { status: 400 });
    }
    const targetUser = await UserModel.findById(targetUserId).select("-password -email -phoneNumber -createdAt -updatedAt -__v -forgetPasswordToken -loginTokens -accountSuspensions -accountStatus -statusReasons -twoFactorAuthEnabled -notificationSettings -loginTokens -lastLogin").lean();
    if (!targetUser) {
        return NextResponse.json({ status: "error", message: "User not found with the given Id." }, { status: 404 });
    }
    const blockCheck = await checkBlockAccess(`${user._id}`, targetUserId);
    if (blockCheck)
        return blockCheck;
    return NextResponse.json({
        status: "ok",
        userId: user._id,
        isMyAccount: isMyAccount,
        user: targetUser
    });
});
//# sourceMappingURL=route.js.map