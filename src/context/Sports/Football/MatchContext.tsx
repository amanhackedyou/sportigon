"use client"

// FootballMatchContext.tsx
import { IFootballMatch } from "@/types/football/match";
import React, { createContext, useContext, ReactNode, useState } from "react";

interface FootballMatchContextType {
    // 🔹 Add your state and functions here later
    match: IFootballMatch | null;
    setMatch: React.Dispatch<React.SetStateAction<IFootballMatch | null>>
}

const FootballMatchContext = createContext<FootballMatchContextType | undefined>(undefined);

export const FootballMatchProvider = ({ children }: { children: ReactNode }) => {
    // 🔹 Add your state and logic here later
    const [match, setMatch] = useState<IFootballMatch | null>(null);

    return (
        <FootballMatchContext.Provider value={{ match, setMatch }}>
            {children}
        </FootballMatchContext.Provider>
    );
};

export const useFootballMatch = () => {
    const context = useContext(FootballMatchContext);
    if (!context) {
        throw new Error("useFootballMatch must be used within FootballMatchProvider");
    }
    return context;
};
