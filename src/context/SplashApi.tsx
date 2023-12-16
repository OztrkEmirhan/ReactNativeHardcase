import {createContext, useContext, useEffect, useReducer} from 'react';
import {splashReducer} from './reducer/SplashReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SplashContext = createContext({});

const initialState = {
  showSplash: false,
};

// SplashProvider component'i
export const SplashProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(splashReducer, initialState);

  // AsyncStorage kullanarak uygulama durumunu kontrol et
  const checkSplashStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('showSplash');
      if (value === 'false') {
        dispatch({type: 'HIDE_SPLASH'});
      } else {
        // Check if dispatch is defined before using it
        if (dispatch) {
          dispatch({type: 'SHOW_SPLASH'});
          // İlk açılışta AsyncStorage'i güncelle
          await AsyncStorage.setItem('showSplash', 'false');
        } else {
          console.error('Dispatch function is undefined');
        }
      }
    } catch (error) {
      console.error('AsyncStorage Error: ', error);
    }
  };

  useEffect(() => {
    checkSplashStatus();
  }, []);

  return (
    <SplashContext.Provider value={{showSplash: state.showSplash, dispatch}}>
      {children}
    </SplashContext.Provider>
  );
};

export const useSplashContext = () => {
  const context = useContext(SplashContext);
  if (!context) {
    throw new Error('useSplashContext must be used within a SplashProvider');
  }
  return context;
};
