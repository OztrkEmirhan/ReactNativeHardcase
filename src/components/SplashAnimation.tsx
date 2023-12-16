/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

// Lottie animasyonunu sarmak için AnimatedLottieView bileşeni oluşturuluyor
const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);


export const SplashAnimation = ({ onAnimationComplete }: any) => {
  // Animasyon ilerleme durumu referansı oluşturuluyor
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    // Animasyonun oynatılıp oynatılmadığını kontrol eden fonksiyon

      const checkIfAnimationPlayed = async () => {
        try {
          const animationPlayed = await AsyncStorage.getItem('animationPlayed');
          if (animationPlayed !== null) {
            // Değer varsa işlemleri devam ettir
            onAnimationComplete();
          } else {
            // Değer yoksa animasyonu başlat
            startAnimation();
          }
        } catch (error) {
          console.error('Error checking animationPlayed:', error);
        }
      };
    }
    // Animasyonu başlatan fonksiyon
    const startAnimation = () => {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(async () => {
        await AsyncStorage.setItem('animationPlayed', 'true');
        onAnimationComplete();
      });
    };

    // Animasyonun oynatılıp oynatılmayacağını kontrol et
    checkIfAnimationPlayed();

    // Animasyonu 3 saniye sonra başlatmak için gecikme ekleniyor
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
