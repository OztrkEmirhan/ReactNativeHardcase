/* eslint-disable prettier/prettier */
import { StyleSheet, View } from 'react-native';
import { ContextComponent } from '../components/ContextComponent';

export default function Context() {
  return (
    <View style={styles.container}>
      <ContextComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
