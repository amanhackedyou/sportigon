import { withAuth } from "@/libs/withAuth";
import { BlockModel } from "@/models/Block";
import { FollowModel } from "@/models/Follow";
import { UserModel } from "@/models/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const POST = withAuth(async (user, req, params) => {
    const prms = await params;
    const targetUserId = prms.userId;
    const state = prms.state;
    if (state != "0" && state != "1") {
        return NextResponse.json({ status: "error", message: "Bad request, Invalid state." }, { status: 400 });
    }
    if (!mongoose.Types.ObjectId.isValid(targetUserId)) {
        return NextResponse.json({ status: "error", message: "Bad request, invalid user Id." }, { status: 400 });
    }
    if (targetUserId == `${user._id}`) {
        return NextResponse.json({ status: "error", message: "Bad request, a user cannot follow their self." }, { status: 400 });
    }
    const targetUser = await UserModel.findById(targetUserId);
    if (!targetUser) {
        return NextResponse.json({ status: "error", message: "User not found with the given Id." }, { status: 404 });
    }
    let block = null;
    if (state == "0") {
        block = await BlockModel.findOne({ by: user._id, to: targetUserId });
        if (block) {
            const deleteResults = await BlockModel.deleteOne({ by: user._id, to: targetUserId });
            if (deleteResults.deletedCount > 0) {
                return NextResponse.json({
                    status: "ok",
                    message: "Unblocked."
                });
            }
            else {
                return NextResponse.json({
                    status: "error",
                    message: "Unable to unblock."
                }, { status: 500 });
            }
        }
        return NextResponse.json({
            status: "error",
            message: "Already unblocked."
        }, { status: 400 });
    }
    block = await BlockModel.findOne({ by: user._id, to: targetUserId });
    if (block) {
        return NextResponse.json({
            status: "error",
            message: "Already blocked."
        }, { status: 400 });
    }
    block = await BlockModel.create({ by: user._id, to: targetUserId });
    if (!block) {
        return NextResponse.json({
            status: "error",
            message: "Unable to block."
        }, { status: 500 });
    }
    // Remove follow and update the followCount based on that
    removeFollowRelationships(`${user._id}`, targetUser);
    return NextResponse.json({
        status: "ok",
        message: "Blocked."
    });
});
const removeFollowRelationships = async (userId, targetUserId) => {
    const result1 = await FollowModel.deleteOne({ by: userId, to: targetUserId });
    const result2 = await FollowModel.deleteOne({ by: targetUserId, to: userId });
    const userFollowsTarget = result1.deletedCount || 0;
    const targetFollowsUser = result2.deletedCount || 0;
    await UserModel.bulkWrite([
        {
            updateOne: {
                filter: { _id: userId },
                update: {
                    $inc: {
                        followingCount: -userFollowsTarget,
                        followersCount: -targetFollowsUser
                    }
                }
            }
        },
        {
            updateOne: {
                filter: { _id: targetUserId },
                update: {
                    $inc: {
                        followingCount: -targetFollowsUser,
                        followersCount: -userFollowsTarget
                    }
                }
            }
        }
    ]);
    return {
        deleted: userFollowsTarget + targetFollowsUser,
        userFollowsTarget,
        targetFollowsUser
    };
};
//# sourceMappingURL=route.js.map