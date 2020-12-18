import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './assets/colors';

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue2} />
        <View
            style={{
                flex: 1,
                backgroundColor: colors.GreyBackground,
            }}
        >
            <Routes />
        </View>
    </NavigationContainer>
);

export default App;
