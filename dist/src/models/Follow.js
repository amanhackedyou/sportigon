import { Schema, model, models } from 'mongoose';
const FollowSchema = new Schema({
    by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    to: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });
FollowSchema.index({ by: 1, to: 1 }, { unique: true });
FollowSchema.index({ by: 1, createdAt: -1 });
FollowSchema.index({ to: 1, createdAt: -1 });
export const FollowModel = models["Follow"] || model('Follow', FollowSchema);
//# sourceMappingURL=Follow.js.map