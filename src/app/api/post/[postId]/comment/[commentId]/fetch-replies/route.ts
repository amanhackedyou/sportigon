// import { withAuth } from "@/libs/withAuth";
// import { IUser } from "@/models/User";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import { PostModel } from "@/models/Post/Posts";
// import { IPostLikes, PostLikesModel } from "@/models/Post/post_likes.model";
// import { checkBlockAccess } from "@/libs/checkBlockAccess";
// import { CommentModel } from "@/models/comment/comment_model";
// import { PostCommentLikeModel } from "@/models/comment/comment_like.model";


// export const POST = withAuth(async (user: IUser, req: Request, params: any) => {
//     const commentId = (await params)["commentId"];
//     if (!mongoose.Types.ObjectId.isValid(commentId)) {
//         return NextResponse.json({
//             status: "error",
//             message: "Invalid comment Id"
//         }, { status: 400 });
//     }

//     const post = await CommentModel.findById(commentId);

//     if (!post) {
//         return NextResponse.json({
//             status: "error",
//             message: "Bad request, post not found."
//         }, { status: 400 });
//     }

//     const blockCheck = await checkBlockAccess(`${user._id}`, post.author);
//     if (blockCheck) return blockCheck;

//     return NextResponse.json({
//         status: "ok",
//         message: "Comment liked."
//     });
// });


import { withAuth } from "@/libs/withAuth";
import { IUser } from "@/models/User";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { CommentModel } from "@/models/comment/comment_model";
import { checkBlockAccess } from "@/libs/checkBlockAccess";

export const POST = withAuth(async (user: IUser, req: Request, params: any) => {
    const commentId = (await params)["commentId"];

    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return NextResponse.json({
            status: "error",
            message: "Invalid comment Id"
        }, { status: 400 });
    }

    // Ensure parent comment exists
    const parentComment = await CommentModel.findById(commentId).select("by postId");
    if (!parentComment) {
        return NextResponse.json({
            status: "error",
            message: "Comment not found."
        }, { status: 404 });
    }

    // Check block access
    const blockCheck = await checkBlockAccess(`${user._id}`, parentComment.by);
    if (blockCheck) return blockCheck;

    // Pagination
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    // Fetch replies to this comment
    const replies = await CommentModel.find({
        parentComment: commentId,
        moderationStatus: "approved"
    })
        .sort({ createdAt: 1 }) // Older replies first
        .skip(skip)
        .limit(limit)
        .populate("by", "_id fullName username profilePicture")
        .populate({
            path: "repliesTo", // This is the comment it replied to (1 level deep)
            select: "_id text by createdAt",
            populate: {
                path: "by",
                select: "_id fullName username profilePicture"
            }
        })
        .select("-reports")
        .lean();

    const totalCount = await CommentModel.countDocuments({
        parentComment: commentId,
        moderationStatus: "approved"
    });

    const totalPages = Math.ceil(totalCount / limit);
    const hasMore = page < totalPages;

    return NextResponse.json({
        status: "ok",
        message: "Replies fetched successfully.",
        data: {
            replies,
            pagination: {
                total: totalCount,
                page,
                limit,
                totalPages,
                hasMore
            }
        }
    });
});
