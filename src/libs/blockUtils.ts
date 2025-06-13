// libs/blockUtils.ts
import { BlockModel } from "@/models/Block";
import mongoose from "mongoose";

export const isBlockedEitherWay = async (userId: string | mongoose.Types.ObjectId, targetUserId: string | mongoose.Types.ObjectId) => {
    const result = await BlockModel.findOne({
        $or: [
            { by: userId, to: targetUserId }, // you blocked them
            { by: targetUserId, to: userId }  // they blocked you
        ]
    });
    return !!result;
};