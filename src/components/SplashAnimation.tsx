/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import LottieView from 'lottie-react-native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export const SplashAnimation = ({onAnimationComplete}: any) => {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        onAnimationComplete(); // Animasyon tamamlandığında, parent component'e haber veriliyor
      });
    };

    const delay = setTimeout(startAnimation, 3000);
    return () => clearTimeout(delay);
  }, [onAnimationComplete]);

  return (
    <AnimatedLottieView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        
      }}
      source={require('../assets/Lottie.json')}
      progress={animationProgress.current}
      quality="high"
    />
  );
};
