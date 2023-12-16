import {useEffect, useRef} from 'react';
import {Animated, Easing, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {useSplashContext} from '../context/SplashApi';

export const Splash = () => {
  const {showSplash, dispatch}: any = useSplashContext();
  const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
  const animationProgress = useRef(new Animated.Value(0));
  const navigation = useNavigation();

  useEffect(() => {
    const hideSplashScreen = () => {
      dispatch({type: 'HIDE_SPLASH'});
      // Yönlendirme işlemi buraya taşındı
      navigation.navigate('Login'); // veya istediğiniz sayfaya yönlendirme yapabilirsiniz
    };

    const startAnimation = () => {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        // Animasyon tamamlandığında işlem yapılabilir, ancak şu an sadece splash ekranını gizliyoruz.
        hideSplashScreen();
      });
    };

    // Uygulama ilk yüklendiğinde ve showSplash true olduğunda splash ekranını göster
    if (showSplash) {
      startAnimation();
    }
  }, [dispatch, showSplash, navigation]);

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      {/* Lottie ile splash screen */}
      <AnimatedLottieView
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
        }}
        source={require('../assets/Lottie.json')}
        progress={animationProgress.current}
        resizeMode="cover"
        autoPlay
        loop={false}
      />
    </View>
  );
};
