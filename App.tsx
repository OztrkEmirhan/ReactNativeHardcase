// Import edilecek kütüphaneler
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApiContextProvider} from './src/context/api';
import {SplashProvider} from './src/context/SplashApi';
import {AppContent} from './src/navigations/navigaiton';

const App = () => {
  return (
    <SplashProvider>
      <ApiContextProvider>
        <NavigationContainer>
          <AppContent />
        </NavigationContainer>
      </ApiContextProvider>
    </SplashProvider>
  );
};

export default App;
