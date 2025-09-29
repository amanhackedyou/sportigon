"use client";
import React, { createContext, useContext, useState } from "react";
const FootballMatchContext = createContext(undefined);
export const FootballMatchProvider = ({ children }) => {
    // 🔹 Add your state and logic here later
    const [match, setMatch] = useState(null);
    return (<FootballMatchContext.Provider value={{ match, setMatch }}>
            {children}
        </FootballMatchContext.Provider>);
};
export const useFootballMatch = () => {
    const context = useContext(FootballMatchContext);
    if (!context) {
        throw new Error("useFootballMatch must be used within FootballMatchProvider");
    }
    return context;
};
//# sourceMappingURL=MatchContext.jsx.map