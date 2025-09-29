"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

type SocketContextType = Socket | null;

const WebSocketContext = createContext<SocketContextType>(null);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [socket, setSocket] = useState<Socket | null>(null);

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

    return (
        <WebSocketContext.Provider value={socket}>{children}</WebSocketContext.Provider>
    );
};

export const useWebSocket = () => useContext(WebSocketContext);
