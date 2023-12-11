/* eslint-disable prettier/prettier */
import React from 'react';
import { SplashAnimation } from '../components/SplashAnimation';

const Splash = ({ navigation }: any) => {
    const handleAnimationComplete = () => {
        navigation.replace('Login');
    };

    return <SplashAnimation onAnimationComplete={handleAnimationComplete} />;
};

export default React.memo(Splash);
