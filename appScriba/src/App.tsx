import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import Routes from './routes/Auth.routes';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './assets/colors';
import AppProvider from './hooks';

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue2} />
        <AppProvider>
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.GreyBackground,
                }}
            >
                <Routes />
            </View>
        </AppProvider>
    </NavigationContainer>
);

export default App;
