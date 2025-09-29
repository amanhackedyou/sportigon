import { checkBlockAccess } from "@/libs/checkBlockAccess";
import { withAuth } from "@/libs/withAuth";
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
    const blockCheck = await checkBlockAccess(`${user._id}`, targetUserId);
    if (blockCheck)
        return blockCheck;
    let follow = await FollowModel.findOne({
        by: user._id,
        to: targetUserId
    });
    if (state == "0") {
        if (follow) {
            const deleteResults = await FollowModel.deleteOne({
                by: user._id,
                to: targetUserId
            });
            if (deleteResults.deletedCount > 0) {
                // TODO: UPDATE THE FOLLOWERS/FOLLOWING COUNT
                updateTheFollowersAndFollowing(state, `${user._id}`, targetUserId);
                return NextResponse.json({
                    status: "ok",
                    message: "Unfollowed"
                });
            }
            else {
                return NextResponse.json({
                    status: "error",
                    message: "Failed to unfollow."
                }, { status: 500 });
            }
        }
        else {
            return NextResponse.json({ status: "error", message: "Bad request, you've not even followed them yet." }, { status: 400 });
        }
    }
    if (follow) {
        return NextResponse.json({
            status: "ok",
            message: "Already follows."
        });
    }
    follow = await FollowModel.create({
        by: user._id,
        to: targetUserId
    });
    if (!follow) {
        return NextResponse.json({
            status: "error",
            message: "Failed to follow."
        }, { status: 500 });
    }
    // TODO: UPDATE THE FOLLOWERS/FOLLOWING COUNT
    updateTheFollowersAndFollowing(state, `${user._id}`, targetUserId);
    return NextResponse.json({
        status: "ok",
        message: "Followed"
    });
});
const updateTheFollowersAndFollowing = async (state, userId, targetUserId) => {
    await UserModel.bulkWrite([
        {
            updateOne: {
                filter: { _id: userId },
                update: { $inc: { followingCount: state == "1" ? 1 : -1 } }
            }
        },
        {
            updateOne: {
                filter: { _id: targetUserId },
                update: { $inc: { followersCount: state == "1" ? 1 : -1 } }
            }
        }
    ]);
};
//# sourceMappingURL=route.js.map