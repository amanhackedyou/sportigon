import { getUserIdByCookie, isUserAutherized } from "@/libs/authMiddleware";
import { withAuth } from "@/libs/withAuth";
import { IPost, PostModel } from "@/models/Post/Posts";
import { IUser } from "@/models/User";
import { ICustomPostData, IMedia } from "@/types";
import { classifyImage, ImageCategory } from "@/utils/imageClasification";
import { extractHashtags } from "@/utils/utils";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server"

interface IBody {
    caption?: string,
    type: "normal" | "custom",
    posts?: IMedia[],
    customPost?: ICustomPostData
}

export const POST = withAuth(async (user: IUser, req: Request) => {

    const contentType = req.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
        return NextResponse.json({
            status: "error",
            message: "Bad request, Invalid content type."
        }, {
            status: 400
        });
    }

    let body: IBody | null = null;

    try {
        body = await req.json();
    } catch (e) {
        console.log(e);

        return NextResponse.json({
            status: "error",
            message: "Bad request, Invalid request body."
        }, {
            status: 400
        });
    }

    if (!body) {
        return NextResponse.json({
            status: "error",
            message: "Bad request, Invalid request body."
        }, {
            status: 400
        });
    }

    if (!body.type || !body.posts || !body.customPost) {
        return NextResponse.json({
            status: "error",
            message: "Missing required fields: type, posts, or customPost."
        }, {
            status: 400
        });
    }

    // @ts-ignore
    if (body.type != "normal" && body.type != "custom") {
        return NextResponse.json({
            status: "error",
            message: "Bad request, invalid post type."
        }, {
            status: 400
        });
    }

    const hashtags = extractHashtags(body.caption ?? "");


    let post: IPost | null = null;

    try {
        post = await PostModel.create({
            author: user._id,
            postType: body.type,
            caption: body.caption,
            media: body.posts,
            customPostType: body.customPost,
            hashtags: hashtags
        });
    } catch (e) {
        return NextResponse.json({
            status: "error",
            message: "Failed to upload post, there might be an issue, please try again."
        });
    }

    if (!post) {
        return NextResponse.json({
            status: "error",
            message: "Failed to upload post, there might be an issue, please try again."
        });
    }


    // Making the API calls to the ML/AI Model to check if the post is netural
    // checkPostForAdults(posts, savedPost);

    return NextResponse.json({
        status: "ok",
        post,
        message: "Post has been uploaded successfully!"
    });
});

const checkPostForAdults = async (posts: FormDataEntryValue[], savedPost: any) => {
    const imageClasificationApi = "http://191.96.31.132:8000/classify/";

    let currentAttempt = 1;

    // console.log("Hii");
    // console.log(posts);


    for (let i = 0; i < posts.length; i++) {
        // console.log("Hii3");

        const post = posts[i];

        if (currentAttempt >= 10) {
            currentAttempt = 1;
            continue;
        }

        const classificationFormData = new FormData();
        classificationFormData.append("file", post);

        const request = await fetch(imageClasificationApi, {
            method: "POST",
            body: classificationFormData
        });

        // console.log(request.text);


        if (!request.ok) {
            currentAttempt++;
            i--;
            continue;
        }

        const response = await request.json();
        if (response["status"] != "ok") {
            currentAttempt++;
            i--;
            continue;
        }

        console.log(response["predictions"]);

        const imagesClsCatagory = classifyImage(response["predictions"]);
        console.log(imagesClsCatagory);
        console.log("Heyy");


        if (imagesClsCatagory !== ImageCategory.SAFE) {
            console.log("Good");
            // savedPost["isReadyForRender"] = true;
            savedPost["isSensitiveContent"] = true;
            savedPost["isBanned"] = true;
            savedPost["banReason"] = imagesClsCatagory;
            break;
        }


        currentAttempt = 1;
    }

    // console.log("Hii2");


    savedPost["isReadyForRender"] = true;
    await savedPost.save();

}