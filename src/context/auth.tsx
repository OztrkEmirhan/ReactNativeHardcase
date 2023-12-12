/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { ApiContext } from './api';

// AuthProvider içinde kullanılmadığında hata patlatan ve
// ApiContext'ten gelen değeri döndüren özel bir hook
export const useAuth = () => {
  // ApiContext'ten değeri al
  const context = useContext(ApiContext);

  // Eğer context değeri bulunamazsa hata patlat
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  // ApiContext'ten gelen değeri döndür
  return context;
};
