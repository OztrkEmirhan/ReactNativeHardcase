/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Main';
import Login from '../pages/Login';
import SplashScreen from '../pages/SplashScreen';
import {useSplashContext} from '../context/SplashApi';
import {Splash} from '../pages/Splash';

const Stack = createNativeStackNavigator();
export const AppContent = () => {
  const {showSplash}: any = useSplashContext();

  if (showSplash) {
    return <Splash />;
  }
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        options={{headerShown: false}}
        name="SplashScreen"
        component={SplashScreen}
      />
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
  );
};
