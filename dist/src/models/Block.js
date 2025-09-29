// models/Block.ts
import { Schema, model, models } from 'mongoose';
const BlockSchema = new Schema({
    by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    to: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });
BlockSchema.index({ by: 1, to: 1 }, { unique: true });
BlockSchema.index({ to: 1 });
BlockSchema.index({ by: 1 });
export const BlockModel = models['Block'] || model('Block', BlockSchema);
// ⚙️ 5. Query - Time Filtering(Advanced Feature)
// When fetching public content like:
// Feed,
// Suggested users,
// Global explore tab,
// ...you can exclude blocked users' content at the query level like this:
// const blockedUsers = await BlockModel.find({ by: user._id }).select("to");
// const blockedUserIds = blockedUsers.map(b => b.to);
// const feedPosts = await PostModel.find({
//     userId: { $nin: blockedUserIds }
// });
//# sourceMappingURL=Block.js.map