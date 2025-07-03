// import { withAuth } from "@/libs/withAuth";
// import { IUser } from "@/models/User";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import { PostModel } from "@/models/Post/Posts";
// import { IPostLikes, PostLikesModel } from "@/models/Post/post_likes.model";
// import { checkBlockAccess } from "@/libs/checkBlockAccess";

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

//     const response = {

//     }

//     return NextResponse.json({
//         status: "ok",
//         message: "Post liked."
//     });
// });




import { withAuth } from "@/libs/withAuth";
import { IUser } from "@/models/User";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { PostModel } from "@/models/Post/Posts";
import { PostLikesModel } from "@/models/Post/post_likes.model";
import { checkBlockAccess } from "@/libs/checkBlockAccess";
import { UserModel } from "@/models/User"; // if needed for deeper population

export const POST = withAuth(async (user: IUser, req: Request, params: any) => {
    const postId = (await params)["postId"];

    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return NextResponse.json({
            status: "error",
            message: "Invalid post Id"
        }, { status: 400 });
    }

    const post = await PostModel.findById(postId)
        .populate("author", "_id fullName username  isVerified profilePicture") // You can customize this projection
    // .lean();

    if (!post) {
        return NextResponse.json({
            status: "error",
            message: "Bad request, post not found."
        }, { status: 400 });
    }

    const blockCheck = await checkBlockAccess(`${user._id}`, post.author._id);
    if (blockCheck) return blockCheck;

    // Check if the current user has liked the post
    const userLiked = await PostLikesModel.exists({ post: post._id, user: user._id });

    // Construct response object
    const response = {
        _id: post._id,
        isMyPost: post.author._id.toString() === `${user._id}`,
        author: post.author,
        postType: post.postType,
        customPostType: post.customPostType,
        caption: post.caption,
        tags: post.tags,
        hashtags: post.hashtags,
        mentions: post.mentions,
        location: post.location,
        media: post.media,
        privacy: post.privacy,
        isFlagged: post.isFlagged,
        moderationStatus: post.moderationStatus,
        statusReason: post.statusReason,
        reportsCount: post.reports?.length || 0,
        isReadyForRender: post.isReadyForRender,
        isSensitiveContent: post.isSensitiveContent,
        isBanned: post.isBanned,
        banReason: post.banReason,
        likesCount: post.likesCount,
        sharesCount: post.sharesCount,
        commentsCount: post.commentsCount,
        reactionsCount: post.reactionsCount,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        isLikedByYou: !!userLiked
    };

    return NextResponse.json({
        status: "ok",
        message: "Post fetched successfully.",
        data: response
    });
});
