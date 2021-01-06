import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { colors } from '../assets/colors';
import { AppNameText, SignInText, SignUpText } from '../assets/strings';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            // headerTintColor: colors.green1,
            // headerStyle: {
            //     backgroundColor: colors.blue2,
            // },
            cardStyle: { backgroundColor: colors.GreyBackground },
        }}
    >
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
);
export default AuthRoutes;
