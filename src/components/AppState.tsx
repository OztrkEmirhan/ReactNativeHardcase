/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet, Text, View } from 'react-native';

const AppStates = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
      } else if (nextAppState === 'background') {
        console.log('App is in the background!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);

      console.log('AppState', appState.current);
      setCounter(prevCounter => prevCounter + 1);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>{appStateVisible}</Text>
      <Text>Zamanlayıcı {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppStates;
