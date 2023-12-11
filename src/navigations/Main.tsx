/* eslint-disable prettier/prettier */
// MainScreen.js

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Context from '../pages/Context';
import Home from '../pages/Home';
import MusicPlayer from '../pages/MusicPlayer';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MusicPlayer" component={MusicPlayer} />
      <Tab.Screen name="Context" component={Context} />
    </Tab.Navigator>
  );
};

export default Main;
