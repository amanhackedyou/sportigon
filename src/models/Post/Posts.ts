import mongoose from "mongoose";

export const BAN_ENUMS = ["", "sexual", "adult", "pornographic", "voilence", "too-many-reports"];


export interface IMedia {
    type: "image" | "video" | "audio" | "gif" | "document";
    url: string;
    thumbnail?: string;
}

export interface IPost {
    _id?: mongoose.Types.ObjectId;
    author: mongoose.Types.ObjectId;
    postType: "normal" | "custom";
    customPostType?: {
        fg?: string;
        bg?: string;
        url?: string;
    };
    likesCount?: number,
    sharesCount?: number,
    commentsCount?: number,
    reactionsCount?: number,
    caption?: string;
    tags?: string[];
    hashtags?: string[];
    mentions?: mongoose.Types.ObjectId[];
    location?: string;
    media?: IMedia[];
    privacy?: "public" | "friends" | "private";
    isFlagged?: boolean;
    moderationStatus?: "pending" | "approved" | "removed";
    statusReason?: string;
    reports?: {
        user?: mongoose.Types.ObjectId;
        reason?: (typeof BAN_ENUMS)[number];
        createdAt?: Date;
    }[];
    isReadyForRender?: boolean;
    isSensitiveContent?: boolean;
    isBanned?: boolean;
    banReason?: (typeof BAN_ENUMS)[number];
    createdAt?: Date;
    updatedAt?: Date;
}

// export type PostDocument = Post & mongoose.Document;


const PostSchema: mongoose.Schema<IPost> = new mongoose.Schema(
    {
        /** Post Author */
        author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

        /** Post Type */
        postType: { type: String, enum: ["normal", "custom"], required: true },
        customPostType: {
            fg: { type: String, default: "#fff" },
            bg: { type: String, default: "#000" },
            url: { type: String, default: "" }, // Background image for custom posts
        },

        /** Post Content */
        caption: { type: String, trim: true, default: "" },
        tags: [{ type: String, trim: true }], // Tags related to the post
        hashtags: [{ type: String, trim: true }], // Hashtags related to the post
        mentions: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users mentioned in the post
        location: { type: String, trim: true, default: "" }, // Location tagged in the post
        media: [
            {
                type: { type: String, enum: ["image", "video", "audio", "gif", "document"], required: true },
                url: { type: String, required: true },
                thumbnail: { type: String, default: "" }, // For videos & gifs
            },
        ],

        /** Privacy Settings */
        privacy: { type: String, enum: ["public", "friends", "private"], default: "public" },

        /** Engagements */
        // likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
        // shares: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        // saves: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

        /** Moderation */
        isFlagged: { type: Boolean, default: false },
        moderationStatus: { type: String, enum: ["pending", "approved", "removed"], default: "approved" },
        statusReason: { type: String, default: "" },
        reports: [
            {
                user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
                reason: { type: String, default: "", enum: BAN_ENUMS },
                createdAt: { type: Date, default: Date.now },
            },
        ],

        /** Post Status */
        isReadyForRender: { type: Boolean, default: false },
        isSensitiveContent: { type: Boolean, default: false },
        isBanned: { type: Boolean, default: false },
        banReason: { type: String, default: "", enum: BAN_ENUMS },

        /** Post insigts */
        likesCount: { type: Number, default: 0 },
        sharesCount: { type: Number, default: 0 },
        commentsCount: { type: Number, default: 0 },
        reactionsCount: { type: Number, default: 0 },

        /** System Fields */
    },
    { timestamps: true }
);

export const PostModel = mongoose.models["Post"] || mongoose.model("Post", PostSchema);
