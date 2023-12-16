/* eslint-disable prettier/prettier */
import { createContext, useReducer, useState } from 'react';
import { authReducer } from './reducer/authReducer';

// ApiContext oluşturuluyor ve başlangıç değeri boş bir nesne olarak atanıyor
export const ApiContext = createContext({});

// ApiContextProvider bileşeni, uygulamanın genel durumunu yöneten bir sağlayıcı
export const ApiContextProvider = ({ children }: any) => {
  // Başlangıç durumu tanımlanıyor
  const initialState = {
    email: '',
    password: '',
    user: null,
    isAuthenticated: false,
  };

  // useState ile isim ve soyisim state'leri tanımlanıyor
  const [name, setName] = useState('Emirhan');
  const [surname, setSurname] = useState('Öztürk');

  // useReducer ile authReducer fonksiyonu ve başlangıç durumu ile durum ve dispatch elde ediliyor
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Kullanıcı girişi fonksiyonu
  const login = (user: any) => {
    dispatch({ type: 'LOGIN', payload: { user } });
  };

  // Kullanıcı çıkışı fonksiyonu
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // ApiContext.Provider ile değerleri alt bileşenlere ileten bir sağlayıcı bileşeni
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
