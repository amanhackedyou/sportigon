"use client";

import LoadingPage from '@/components/LoadingPage';
import { HttpManager } from '@/libs/http_manager';
import { CUser } from '@/types/interfaces.client';
import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react';

// Define the shape of the context
interface AuthContextType {
    user: CUser | null;
    loading: boolean;
    reloadUser: () => Promise<void>;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    reloadUser: async () => { },
});

// Provider props type
interface AuthProviderProps {
    children: ReactNode;
}

// AuthProvider implementation
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<CUser | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        setLoading(true);
        try {
            const data = await HttpManager.post('/api/user/me/get-profile');
            if (data.status === 'ok') {
                setUser(data.user);
            }
        } catch (err) {
            console.error('Failed to fetch user:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const reloadUser = async () => {
        fetchUser();
    }

    return (
        <AuthContext.Provider value={{ user, loading, reloadUser }}>
            {loading ? <LoadingPage /> : children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = (): AuthContextType => useContext(AuthContext);