import { withAuth } from "@/libs/withAuth";
import { IUser } from "@/models/User";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { PostModel } from "@/models/Post/Posts";
import { IPostLikes, PostLikesModel } from "@/models/Post/post_likes.model";
import { checkBlockAccess } from "@/libs/checkBlockAccess";

interface IBody {
    like: 0 | 1
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

    let like: IPostLikes | null = null;

    like = await PostLikesModel.findOne({ postId, userId: user._id });

    if (like) {
        if ((like.isLiked ? 1 : 0) != body.like) {
            updateLikesCount(body.like, postId);
        }

        like.isLiked = body.like == 1 ? true : false;
        await like.save();
        return NextResponse.json({
            status: "ok",
            message: `Post ${body.like == 1 ? "" : "un"}liked.`
        });
    }

    if (body.like == 0) {
        return NextResponse.json({
            status: "error",
            message: "You've not liked this post yet."
        });
    }

    try {
        like = await PostLikesModel.create({ postId, userId: user._id });
    } catch (e) {
        return NextResponse.json({
            status: "error",
            message: "Failed to like this post, please try again."
        });
    }

    if (!like) {
        return NextResponse.json({
            status: "error",
            message: "Failed to like this post, please try again."
        });
    }

    updateLikesCount(body.like, postId);


    return NextResponse.json({
        status: "ok",
        message: "Post liked."
    });
});

const updateLikesCount = async (like: number, postId: string) => {
    // const likes = await PostLikesModel.countDocuments({ postId });

    // await PostModel.findByIdAndUpdate(postId, {
    //     likesCount: likes
    // });

    await PostModel.findByIdAndUpdate(postId, {
        $inc: { likesCount: like === 1 ? 1 : -1 }
    });

}