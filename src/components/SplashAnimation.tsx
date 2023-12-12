/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export const SplashAnimation = ({ onAnimationComplete }: any) => {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    const checkIfAnimationPlayed = async () => {
      try {
        const animationPlayed = await AsyncStorage.getItem('animationPlayed');
        if (!animationPlayed) {
          startAnimation();
        } else {
          onAnimationComplete(); // Skip animation and proceed to the next screen
        }
      } catch (error) {
        console.error('Error checking animationPlayed:', error);
      }
    };

    const startAnimation = () => {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(async () => {
        // Save a flag indicating that the animation has been played
        await AsyncStorage.setItem('animationPlayed', 'true');
        onAnimationComplete();
      });
    };

    checkIfAnimationPlayed();
    const delay = setTimeout(startAnimation, 3000);

    // Clean up any asynchronous tasks or timers
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

/* eslint-disable prettier/prettier */
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import LottieView from 'lottie-react-native';
// import React, { useEffect, useRef } from 'react';
// import { Animated, Easing } from 'react-native';

// const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

// export const SplashAnimation = ({ navigation }: any) => {
//   const animationProgress = useRef(new Animated.Value(0));

//   useEffect(() => {
//     const checkIfAnimationPlayed = async () => {
//       try {
//         const animationPlayed = await AsyncStorage.getItem('animationPlayed');
//         if (!animationPlayed) {
//           startAnimation();
//         } else {
//           // Skip animation and proceed to the login screen
//           navigation.replace('LoginScreen'); 
//         }
//       } catch (error) {
//         console.error('Error checking animationPlayed:', error);
//       }
//     };

//     const startAnimation = () => {
//       Animated.timing(animationProgress.current, {
//         toValue: 1,
//         duration: 5000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       }).start(async () => {
//         // Save a flag indicating that the animation has been played
//         await AsyncStorage.setItem('animationPlayed', 'true');
//         // Skip animation and proceed to the login screen
//         navigation.replace('LoginScreen'); 
//       });
//     };

//     const delay = setTimeout(() => {
//       checkIfAnimationPlayed();
//       startAnimation();
//     }, 3000);

//     // Clean up any asynchronous tasks or timers
//     return () => clearTimeout(delay);
//   }, [navigation]);

//   return (
//     <AnimatedLottieView
//       // eslint-disable-next-line react-native/no-inline-styles
//       style={{
//         flex: 1,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'white',
//       }}
//       source={require('../assets/Lottie.json')}
//       progress={animationProgress.current}
//       quality="high"
//     />
//   );
// };

