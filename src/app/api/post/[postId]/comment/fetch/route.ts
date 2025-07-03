// import { withAuth } from "@/libs/withAuth";
// import { IUser } from "@/models/User";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import { PostModel } from "@/models/Post/Posts";
// import { IPostLikes, PostLikesModel } from "@/models/Post/post_likes.model";
// import { checkBlockAccess } from "@/libs/checkBlockAccess";
// import { IMedia } from "@/types";
// import { CommentModel } from "@/models/comment/comment_model";

// export const POST = withAuth(async (user: IUser, req: Request, params: any) => {
//     const postId = (await params)["postId"];
//     if (!mongoose.Types.ObjectId.isValid(postId)) {
//         return NextResponse.json({
//             status: "error",
//             message: "Invalid post Id"
//         }, { status: 400 });
//     }

//     const post = await PostModel.findById(postId);

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
//     });
// });



import { withAuth } from "@/libs/withAuth";
import { IUser } from "@/models/User";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { PostModel } from "@/models/Post/Posts";
import { checkBlockAccess } from "@/libs/checkBlockAccess";
import { CommentModel } from "@/models/comment/comment_model";

export const POST = withAuth(async (user: IUser, req: Request, params: any) => {
    const postId = (await params)["postId"];

    // ✅ Validate postId
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return NextResponse.json({
            status: "error",
            message: "Invalid post Id"
        }, { status: 400 });
    }

    // ✅ Check if post exists
    const post = await PostModel.findById(postId).select("_id author");
    if (!post) {
        return NextResponse.json({
            status: "error",
            message: "Post not found."
        }, { status: 404 });
    }

    // ✅ Block access if either user has blocked the other
    const blockCheck = await checkBlockAccess(`${user._id}`, post.author);
    if (blockCheck) return blockCheck;

    // ✅ Get pagination query params
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    // ✅ Fetch top-level approved comments with pagination
    const comments = await CommentModel.find({
        postId: post._id,
        parentComment: null,
        moderationStatus: "approved"
    })
        .sort({ createdAt: -1 }) // Newest first
        .skip(skip)
        .limit(limit)
        .populate("by", "_id fullName username profilePicture") // Customize if needed
        .select("-reports") // Exclude heavy/mod-sensitive fields
        .lean();

    // ✅ Get total count for pagination
    const totalCount = await CommentModel.countDocuments({
        postId: post._id,
        parentComment: null,
        moderationStatus: "approved"
    });

    const totalPages = Math.ceil(totalCount / limit);
    const hasMore = page < totalPages;

    // ✅ Send response
    return NextResponse.json({
        status: "ok",
        message: "Comments fetched successfully.",
        data: {
            comments,
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
