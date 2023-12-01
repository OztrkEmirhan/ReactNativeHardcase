// App.js

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './pages/Login';
import Main from './navigations/Main';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Giriş Sayfası */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        {/* Ana Sayfa */}
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;