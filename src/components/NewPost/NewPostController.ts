"use cleint";

import { HttpManager } from "@/libs/http_manager";
import { MediaFile } from "./NewPostPage";

export const createBackgroundPost = async (caption: string, fgClr: string, bgClr?: string, bgImg?: string) => {
    const body: {
        caption?: string;
        type: "normal" | "custom";
        posts?: MediaFile[];
        customPost?: {
            bg?: string;
            fg: string;
            url?: string;
        };
    } = {
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
}