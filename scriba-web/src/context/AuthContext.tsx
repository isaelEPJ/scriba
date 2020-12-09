import React, { createContext, useCallback } from 'react';

interface authContextData {
    name: string;
    SignIn(): void;
}
const AuthContext = createContext<authContextData>({} as authContextData);

const AuthProvider: React.FC = ({ children }) => {
    const SignIn = useCallback(() => {
        console.log('SignIn');
    }, []);
    return (
        <AuthContext.Provider value={{ name: 'isael', SignIn }}>
            {children}
        </AuthContext.Provider>
    );
};
export { AuthContext, AuthProvider };
