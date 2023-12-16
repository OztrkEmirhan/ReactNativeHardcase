/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { ApiContext } from './api';
export const useAuth = () => {

  const context = useContext(ApiContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
