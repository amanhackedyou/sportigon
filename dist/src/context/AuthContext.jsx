"use client";
import LoadingPage from '@/components/LoadingPage';
import { HttpManager } from '@/libs/http_manager';
import React, { createContext, useContext, useEffect, useState, } from 'react';
// Create the context with default values
const AuthContext = createContext({
    user: null,
    loading: true,
    reloadUser: async () => { },
});
// AuthProvider implementation
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchUser = async () => {
        setLoading(true);
        try {
            const data = await HttpManager.post('/api/user/me/get-profile');
            if (data.status === 'ok') {
                setUser(data.user);
            }
        }
        catch (err) {
            console.error('Failed to fetch user:', err);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);
    const reloadUser = async () => {
        fetchUser();
    };
    return (<AuthContext.Provider value={{ user, loading, reloadUser }}>
            {loading ? <LoadingPage /> : children}
        </AuthContext.Provider>);
};
// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
//# sourceMappingURL=AuthContext.jsx.map