// libs/blockUtils.ts
import { BlockModel } from "@/models/Block";
export const isBlockedEitherWay = async (userId, targetUserId) => {
    const result = await BlockModel.findOne({
        $or: [
            { by: userId, to: targetUserId }, // you blocked them
            { by: targetUserId, to: userId } // they blocked you
        ]
    });
    return !!result;
};
//# sourceMappingURL=blockUtils.js.map