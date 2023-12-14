/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ApiContextProvider } from './src/context/api';
import Main from './src/navigations/Main';
import Login from './src/pages/Login';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';
import Splash from './src/pages/Splash';
// import Splash from './src/pages/Splash';

const Stack = createNativeStackNavigator();

const App = () => {
  // const [state] = useGlobalState();

  // if(state.isBooting) {
  //   return <Splash/>;
  // }

  return (
    <ApiContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Splash" component={Splash} />
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
    </ApiContextProvider>
  );
};
export default App;