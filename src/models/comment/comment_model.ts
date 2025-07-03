import { IMedia } from "@/types"
import mongoose, { Document, Schema } from "mongoose"
import { BAN_ENUMS } from "../Post/Posts";

export interface IComment extends Document {
    by: Schema.Types.ObjectId,
    repliesTo?: Schema.Types.ObjectId,
    parentComment?: Schema.Types.ObjectId,
    isAuther?: boolean | false,
    likesCount?: number | 0,
    repliesCount?: number | 0,
    text?: string | "",
    isFlagged?: boolean | false,
    moderationStatus?: "pending" | "approved" | "removed",
    statusReason?: string | "",
    postId: Schema.Types.ObjectId,
    reports?: {
        user: Schema.Types.ObjectId,
        reason: string,
        createdAt: Date
    }[],
    media?: IMedia,
}

const CommentSchema: mongoose.Schema<IComment> = new Schema<IComment>({
    by: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true
    },

    postId: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Post',
        index: true
    },

    repliesTo: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },

    parentComment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },

    isAuther: {
        type: Boolean,
        default: false
    },

    text: {
        type: String,
        default: ""
    },

    likesCount: {
        type: Number,
        default: 0
    },

    repliesCount: {
        type: Number,
        default: 0
    },

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

    media: {
        mediaType: {
            type: String,
            enum: ["video", "image", "gif"]
        },

        url: String,
        thumbnail: String
    }
}, {
    timestamps: true
});

export const CommentModel = mongoose.models["Comment"] || mongoose.model("Comment", CommentSchema);