import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../assets/colors';
import { useAuth } from '../hooks/Auth';
import AppRoutes from './App.routes';
import AuthRoutes from './Auth.routes';

const Routes: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ActivityIndicator size="large" color={colors.redError} />
            </View>
        );
    }
    return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
