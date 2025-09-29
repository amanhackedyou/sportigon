import { withAuth } from "@/libs/withAuth";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { checkBlockAccess } from "@/libs/checkBlockAccess";
import { CommentModel } from "@/models/comment/comment_model";
import { PostCommentLikeModel } from "@/models/comment/comment_like.model";
export const POST = withAuth(async (user, req, params) => {
    const commentId = (await params)["commentId"];
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return NextResponse.json({
            status: "error",
            message: "Invalid comment Id"
        }, { status: 400 });
    }
    const post = await CommentModel.findById(commentId);
    if (!post) {
        return NextResponse.json({
            status: "error",
            message: "Bad request, post not found."
        }, { status: 400 });
    }
    const blockCheck = await checkBlockAccess(`${user._id}`, post.author);
    if (blockCheck)
        return blockCheck;
    const body = await req.json();
    let like = null;
    like = await PostCommentLikeModel.findOne({ commentId, userId: user._id });
    if (like && body.like == 0) {
        // User is unliking the comment
        updateLikesCount(-1, commentId);
        await PostCommentLikeModel.deleteOne({ commentId, userId: user._id });
        return NextResponse.json({
            status: "ok",
            message: `Comment unliked.`
        });
    }
    if (body.like == 0) {
        return NextResponse.json({
            status: "error",
            message: "You've not liked this comment yet."
        });
    }
    try {
        like = await PostCommentLikeModel.create({ commentId, userId: user._id });
    }
    catch (e) {
        return NextResponse.json({
            status: "error",
            message: "Failed to like this comment, please try again."
        });
    }
    if (!like) {
        return NextResponse.json({
            status: "error",
            message: "Failed to like this comment, please try again."
        });
    }
    updateLikesCount(body.like == 1 ? 1 : -1, commentId);
    return NextResponse.json({
        status: "ok",
        message: "Comment liked."
    });
});
const updateLikesCount = async (increaseBy, commentId) => {
    await CommentModel.findByIdAndUpdate(commentId, {
        $inc: { likesCount: increaseBy }
    });
};
//# sourceMappingURL=route.js.map