import { withAuth } from "@/libs/withAuth";
import { IUser } from "@/models/User";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { PostModel } from "@/models/Post/Posts";
import { IPostLikes, PostLikesModel } from "@/models/Post/post_likes.model";
import { checkBlockAccess } from "@/libs/checkBlockAccess";
import { IMedia } from "@/types";
import { CommentModel } from "@/models/comment/comment_model";

interface IBody {
    text: string,
    repliesTo?: string,
    parentComment?: string,
    media?: IMedia
}

export const POST = withAuth(async (user: IUser, req: Request, params: any) => {
    const postId = (await params)["postId"];
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return NextResponse.json({
            status: "error",
            message: "Invalid post Id"
        }, { status: 400 });
    }

    const post = await PostModel.findById(postId);

    if (!post) {
        return NextResponse.json({
            status: "error",
            message: "Bad request, post not found."
        }, { status: 400 });
    }

    const blockCheck = await checkBlockAccess(`${user._id}`, post.author);
    if (blockCheck) return blockCheck;

    const body: IBody = await req.json();

    if ((!body.text || body.text.trim() === "") && !body.media) {
        return NextResponse.json({
            status: "error",
            message: "Bad request, text or media is required to create a comment."
        }, { status: 400 });
    }

    if (body.repliesTo && !mongoose.Types.ObjectId.isValid(body.repliesTo)) {
        return NextResponse.json({
            status: "error",
            message: "Bad request, invalid repliesTo comment Id."
        }, { status: 400 });
    }

    if (body.parentComment && !mongoose.Types.ObjectId.isValid(body.parentComment)) {
        const parentComment = await CommentModel.findById(body.parentComment);
        if (!parentComment) {
            return NextResponse.json({
                status: "error",
                message: "Bad request, parent comment not found."
            }, { status: 400 });
        }

        if (parentComment.isFlagged || parentComment.moderationStatus !== "approved") {
            return NextResponse.json({
                status: "error",
                message: "Bad request, parent comment is not approved or flagged."
            }, { status: 400 });
        }

        if (parentComment.postId.toString() !== postId) {
            return NextResponse.json({
                status: "error",
                message: "Bad request, parent comment does not belong to this post."
            }, { status: 400 });
        }
    }

    const newComment = await CommentModel.create({
        by: user._id,
        text: body.text || "",
        postId: post._id,
        media: body.media ? {
            mediaType: body.media.type,
            url: body.media.url,
            thumbnail: body.media.thumbnail
        } : undefined,
        repliesTo: body.repliesTo ? new mongoose.Types.ObjectId(body.repliesTo) : undefined,
        parentComment: body.parentComment ? new mongoose.Types.ObjectId(body.parentComment) : undefined,
        isAuther: `${user._id}`.toString() === post.author.toString()
    })

    if (!newComment) {
        return NextResponse.json({
            status: "error",
            message: "Failed to create comment."
        }, { status: 500 });
    }

    if (body.parentComment) {
        await CommentModel.findByIdAndUpdate(body.parentComment, {
            $inc: { repliesCount: 1 }
        });


    }

    await PostModel.findByIdAndUpdate(postId, {
        $inc: { commentsCount: 1 }
    });


    // if (body.repliesTo) {
    //     const repliesToComment = await CommentModel.findById(body.repliesTo);
    //     if (repliesToComment) {
    //         await CommentModel.findByIdAndUpdate(repliesToComment._id, {
    //             $inc: { repliesCount: 1 }
    //         });
    //     }
    // }


    return NextResponse.json({
        status: "ok",
        message: "Comment created successfully.",
        comment: newComment
    });
});

