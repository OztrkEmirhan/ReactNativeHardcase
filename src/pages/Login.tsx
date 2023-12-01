import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Snackbar} from 'react-native-paper';
import md5 from 'md5';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Kullanıcı bilgileri.
    const storedEmail = 'Emirhan@gmail.com';
    const storedPassword = 'Emirhan123';

    const storedPasswordHash = md5(storedPassword); // Şifrenin hash'i
    const inputPasswordHash = md5(password);

    if (email === storedEmail && inputPasswordHash === storedPasswordHash) {
      // Giriş başarılı.
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
        onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
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
