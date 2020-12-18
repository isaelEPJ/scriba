import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { colors } from '../assets/colors';
import { AppNameText, SignInText, SignUpText } from '../assets/strings';

const Auth = createStackNavigator();

const Routes: React.FC = () => (
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
        <Auth.Screen name={SignInText} component={SignIn} />
        <Auth.Screen name={SignUpText} component={SignUp} />
    </Auth.Navigator>
);
export default Routes;
