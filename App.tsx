// Import edilecek kütüphaneler
import React from 'react';
import {Splash} from './src/pages/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import {SplashProvider, useSplashContext} from './src/context/SplashApi';
import {ApiContextProvider} from './src/context/api';
import Main from './src/navigations/Main';

// Uygulama içinde kullanım örnek
const Stack = createNativeStackNavigator();

const App = () => {
  const {showSplash}: any = useSplashContext();

  if (showSplash) {
    return <Splash />;
  }

  return (
    <SplashProvider>
      <ApiContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* Giriş Sayfası */}
            <Stack.Screen name="Login" component={Login} />

            {/* Ana Sayfa */}
            <Stack.Screen
              options={{headerShown: false}}
              name="Main"
              component={Main}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApiContextProvider>
    </SplashProvider>
  );
};

export default App;
