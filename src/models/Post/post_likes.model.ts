import mongoose, { Document, Schema, Types } from "mongoose"

export interface IPostLikes extends Document {
    postId: Types.ObjectId,
    userId: Types.ObjectId,
    isLiked: boolean
}

const PostLikesSchema: Schema<IPostLikes> = new Schema(
    {
        postId: {
            type: Schema.ObjectId,
            required: true,
            index: true
        },
        userId: {
            type: Schema.ObjectId,
            required: true
        },
        isLiked: {
            type: Boolean,
            required: true,
            default: true
        }
    },

    { timestamps: true }
);


PostLikesSchema.index({ postId: 1, userId: 1 }, { unique: true });


export const PostLikesModel = mongoose.models["postlikes"] || mongoose.model("postlikes", PostLikesSchema);