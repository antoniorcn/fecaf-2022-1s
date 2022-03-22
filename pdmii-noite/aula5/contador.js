import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
export default () => {
    const v = useState(11);
    const contador = v[0];
    const setContador = v[1];
    return (
        <View>
        <Text>Contador {contador}</Text>
        <Button title="Incrementar" onPress={
            () => { 
                setContador(contador + 1);
            }
        }/>
        </View>
  );
};