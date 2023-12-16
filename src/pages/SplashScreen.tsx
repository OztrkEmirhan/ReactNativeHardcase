import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splash}>
      <Image source={require('../assets/Logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#45BBD4', // Mavi arka plan
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
