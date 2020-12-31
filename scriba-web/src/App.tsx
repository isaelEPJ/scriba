import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';
import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes />
                <GlobalStyles />
            </Router>
        </AuthProvider>
    );
};
export default App;
