"use cleint";
import { HttpManager } from "@/libs/http_manager";
export const createBackgroundPost = async (caption, fgClr, bgClr, bgImg) => {
    const body = {
        caption,
        type: "custom",
        posts: [],
        customPost: {
            bg: bgClr,
            fg: fgClr,
            url: bgImg
        }
    };
    const response = await HttpManager.post("/api/post/create", body);
};
//# sourceMappingURL=NewPostController.js.map