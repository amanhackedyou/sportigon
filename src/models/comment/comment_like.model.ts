import mongoose, { Document, Schema, Types } from "mongoose"

export interface ICommentComment extends Document {
    commentId: Types.ObjectId,
    userId: Types.ObjectId,
}

const PostCommentSchema: Schema<ICommentComment> = new Schema(
    {
        commentId: {
            type: Schema.ObjectId,
            required: true,
            index: true
        },
        userId: {
            type: Schema.ObjectId,
            required: true
        },
    },

    { timestamps: true }
);


PostCommentSchema.index({ commentId: 1, userId: 1 }, { unique: true });


export const PostCommentLikeModel = mongoose.models["post-comment-likes"] || mongoose.model("post-comment-likes", PostCommentSchema);