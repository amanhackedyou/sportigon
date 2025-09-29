"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
const WebSocketContext = createContext(null);
export const WebSocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        const s = io(process.env.NEXT_PUBLIC_WS_URL || "http://localhost:3000", {
            transports: ["websocket"],
            withCredentials: true,
        });
        setSocket(s);
        return () => {
            s.disconnect();
        };
    }, []);
    return (<WebSocketContext.Provider value={socket}>{children}</WebSocketContext.Provider>);
};
export const useWebSocket = () => useContext(WebSocketContext);
//# sourceMappingURL=WebSocketContext.jsx.map