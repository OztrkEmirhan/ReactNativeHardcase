/* eslint-disable prettier/prettier */
import { createContext, useReducer, useState } from 'react';
import { authReducer } from './authReducer';

export const ApiContext = createContext({});

export const ApiContextProvider = ({children}: any) => {
  const initialState = {
    email: '',
    password: '',
    user: null,
    isAuthenticated: false,
  };

const [name, setName] = useState('Emirhan');
  const [surname, setSurname] = useState('Öztürk');

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user: any) => {
    dispatch({ type: 'LOGIN', payload: { user } });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ApiContext.Provider
      value={{
        name,
        setName,
        surname,
        setSurname,
        state,
        login,
        logout,
      }}>
      {children}
    </ApiContext.Provider>
  );
};

