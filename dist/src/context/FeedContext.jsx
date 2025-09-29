"use client";
import React, { createContext, useContext, useState } from 'react';
const FeedContext = createContext(undefined);
export const FeedProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [currentTab, setCurrentTab] = useState("all");
    return (<FeedContext.Provider value={{
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
        }}>
            {children}
        </FeedContext.Provider>);
};
export const useFeed = () => {
    const context = useContext(FeedContext);
    if (!context) {
        throw new Error('useFeed must be used within a FeedProvider');
    }
    return context;
};
//# sourceMappingURL=FeedContext.jsx.map