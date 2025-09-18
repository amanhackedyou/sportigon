"use client";

import { CPost } from '@/types/interfaces.client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type FeedContextType = {
    posts: CPost[];
    setPosts: React.Dispatch<React.SetStateAction<CPost[]>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    hasMore: boolean;
    currentTab: string;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
    setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
};

const FeedContext = createContext<FeedContextType | undefined>(undefined);

type FeedProviderProps = {
    children: ReactNode;
};

export const FeedProvider = ({ children }: FeedProviderProps) => {
    const [posts, setPosts] = useState<CPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [currentTab, setCurrentTab] = useState("all");

    return (
        <FeedContext.Provider
            value={{
                posts,
                setPosts,
                isLoading,
                setIsLoading,
                currentPage,
                setCurrentPage,
                hasMore,
                setCurrentTab,
                setHasMore,
                currentTab
            }}
        >
            {children}
        </FeedContext.Provider>
    );
};

export const useFeed = (): FeedContextType => {
    const context = useContext(FeedContext);
    if (!context) {
        throw new Error('useFeed must be used within a FeedProvider');
    }
    return context;
};
