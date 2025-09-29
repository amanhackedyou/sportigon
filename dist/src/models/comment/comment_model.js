import mongoose, { Schema } from "mongoose";
import { BAN_ENUMS } from "../Post/Posts";
const CommentSchema = new Schema({
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
//# sourceMappingURL=comment_model.js.map