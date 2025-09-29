import mongoose, { Schema } from "mongoose";
const PostCommentSchema = new Schema({
    commentId: {
        type: Schema.ObjectId,
        required: true,
        index: true
    },
    userId: {
        type: Schema.ObjectId,
        required: true
    },
}, { timestamps: true });
PostCommentSchema.index({ commentId: 1, userId: 1 }, { unique: true });
export const PostCommentLikeModel = mongoose.models["post-comment-likes"] || mongoose.model("post-comment-likes", PostCommentSchema);
//# sourceMappingURL=comment_like.model.js.map