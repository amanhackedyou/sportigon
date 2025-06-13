export interface IMedia {
    type: "video" | "image",
    url: string,
    thumbnail?: string
}

export interface ICustomPostData {
    fg?: string,
    bg?: string,
    url?: string
}