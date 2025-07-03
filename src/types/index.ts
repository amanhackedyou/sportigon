export interface IMedia {
    type: "video" | "image" | "gif",
    url: string,
    thumbnail?: string
}

export interface ICustomPostData {
    fg?: string,
    bg?: string,
    url?: string
}