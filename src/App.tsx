import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { AuthProvider } from './hooks/AuthContext';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  </>
);

export default App;
