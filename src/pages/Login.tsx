/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Snackbar, TextInput } from 'react-native-paper';
import { useAuth } from '../context/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');
  const navigation = useNavigation();
  const { login } = useAuth();

  const handleLogin = () => {
    // Kullanıcı bilgileri.
    const storedEmail = 'Emirhan@gmail.com';
    const storedPassword = 'Emirhan123';

    if (email === storedEmail && password === storedPassword) {
      // Giriş başarılı.
      login({email: storedEmail}); // Kullanıcı bilgilerini saklamak için login fonksiyonunu kullanın
      setSnackbarText('Giriş başarılı');
      setSnackbarVisible(true);
      navigation.navigate('Main');
    } else {
      // Kullanıcı veya şifre yanlış.
      setSnackbarText('Kullanıcı adı veya şifre yanlış');
      setSnackbarVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Giriş Yap
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}>
        {snackbarText}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginTop: 16,
  },
});

export default LoginScreen;
