/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Main from './navigations/Main';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Giriş Sayfası */}
        <Stack.Screen name="Login" component={Login} />

        {/* Ana Sayfa */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
