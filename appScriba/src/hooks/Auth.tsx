import AsyncStorage from '@react-native-community/async-storage';
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
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
    loading: boolean;
}
const AuthContext = createContext<authContextData>({} as authContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>({} as AuthState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData(): Promise<void> {
            const [token, user] = await AsyncStorage.multiGet([
                '@Scriba:token',
                '@Scriba:user',
            ]);

            if (token[1] && user[1]) {
                setData({ token: token[1], user: JSON.parse(user[1]) });
            }
            setLoading(false);
        }
        loadStorageData();
    }, []);
    const SignIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', { email, password });
        const { token, user } = response.data;
        await AsyncStorage.multiSet([
            '@Scriba:token',
            token,
            '@Scriba:user',
            JSON.stringify(user),
        ]);
        console.log(response.data);
        setData({ token, user });
    }, []);
    const SignOut = useCallback(async () => {
        await AsyncStorage.multiRemove(['@Scriba:token', '@Scriba:user']);

        setData({} as AuthState);
    }, []);
    return (
        <AuthContext.Provider
            value={{ user: data.user, SignIn, SignOut, loading }}
        >
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
