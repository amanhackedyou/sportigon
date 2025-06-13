import { Schema, model, Document, models, trusted } from 'mongoose';

export interface IFollow extends Document {
    by: Schema.Types.ObjectId;
    to: Schema.Types.ObjectId;
}

const FollowSchema = new Schema<IFollow>(
    {
        by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        to: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

FollowSchema.index({ by: 1, to: 1 }, { unique: true });
FollowSchema.index({ by: 1, createdAt: -1 });
FollowSchema.index({ to: 1, createdAt: -1 });

export const FollowModel = models["Follow"] || model<IFollow>('Follow', FollowSchema);