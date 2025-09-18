export interface CUser {
    _id: string;
    username: string;
    signupWith: string;
    fullName: string;
    profilePicture: string;
    country: string;
    currency: string;
    blockedUsers: string[];
    followersCount: number;
    followingCount: number;
    favoriteSports: string[];
    favoriteTeams: string[];
    favoritePlayers: string[];
    isVerified: boolean;
    isActivityStatusShowing: boolean;
    accountType: 'personal' | 'business' | string; // you can narrow it if needed
    lastLogin: string; // or `Date` if you parse it
    description: string;
}

export interface CPost {
    _id: string;
    isMyPost: boolean;
    author: CUser;
    postType: "normal" | string;
    customPostType: {
        fg: string;
        bg: string;
        url: string;
    };
    caption: string;
    tags: string[];
    hashtags: string[];
    mentions: string[];
    location: string;
    media: {
        type: "image" | "video";
        url: string;
        thumbnail?: string;
        _id: string;
    }[];
    privacy: "public" | "private" | "followers";
    isFlagged: boolean;
    moderationStatus: "approved" | "rejected" | "pending";
    statusReason: string;
    reportsCount: number;
    isReadyForRender: boolean;
    isSensitiveContent: boolean;
    isBanned: boolean;
    banReason: string;
    likesCount: number;
    sharesCount: number;
    commentsCount: number;
    reactionsCount: number;
    createdAt: string;
    updatedAt: string;
    isLikedByYou: boolean;
}
