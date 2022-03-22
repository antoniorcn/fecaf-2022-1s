import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Formulario = () => { 
    const v = useState("");
    const nome = v[0];
    const setNome = v[1];
    return (
        <View>
            <Text>Nome:</Text>
            <TextInput value={nome} 
                onChangeText={(txt)=>{
                    setNome(txt);
                }}/>
            <Button title="Gravar"/>
        </View>
    );
}

const Listar = () => { 
    return (
        <View>
            <Text></Text>
            <Text>João Silva</Text> 
        </View>
    );
}

export default () => { 
    return (
        <View style={{flex: 1}}>
            <NavigationContainer>
                <Tab.Navigator>
                  <Tab.Screen name="Cadastro" component={Formulario}/>
                  <Tab.Screen name="Listar" component={Listar}/>          
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}