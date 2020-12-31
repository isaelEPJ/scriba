import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthState {
    token: string;
    user: Object;
}
interface SignInCredentials {
    email: string;
    password: string;
}

interface authContextData {
    user: object;
    SignIn(credentials: SignInCredentials): Promise<void>;
    SignOut(): void;
}
const AuthContext = createContext<authContextData>({} as authContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Scriba:token');
        const user = localStorage.getItem('@Scriba:user');

        if (token && user) {
            return { token, user: JSON.parse(user) };
        }
        return {} as AuthState;
    });
    const SignIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', { email, password });
        console.log(response.data);
        const { token, user } = response.data;
        localStorage.setItem('@Scriba:token', token);
        localStorage.setItem('@Scriba:user', JSON.stringify(user));

        setData({ token, user });
    }, []);
    const SignOut = useCallback(() => {
        localStorage.removeItem('@Scriba:token');
        localStorage.removeItem('@Scriba:user');

        setData({} as AuthState);
    }, []);
    return (
        <AuthContext.Provider value={{ user: data.user, SignIn, SignOut }}>
            {children}
        </AuthContext.Provider>
    );
};
function useAuth(): authContextData {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
export { AuthContext, useAuth, AuthProvider };
