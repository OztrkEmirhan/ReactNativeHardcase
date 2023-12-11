/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { ApiContext } from '../context/api';

export const ContextComponent = () => {
    const context = useContext(ApiContext);
  return (
    <View
      style={{
        width: 300,
        height: 300,
        backgroundColor: '#eaeaea',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
      }}
    >
        <Text>{context.name}</Text>
        <Text>{context.surname}</Text>

        <Button 
        onPress={() => {
            context.setName('Furkan Atakan');
            context.setSurname('Bozkurt');
        }}
        >
            <Text>Değiştir</Text>
        </Button>
    </View>
  );
};
