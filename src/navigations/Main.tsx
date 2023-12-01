// MainScreen.js

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import MusicPlayer from '../pages/MusicPlayer';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MusicPlayer" component={MusicPlayer} />
    </Tab.Navigator>
  );
};

export default Main;
