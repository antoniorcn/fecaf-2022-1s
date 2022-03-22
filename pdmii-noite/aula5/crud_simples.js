import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Formulario = () => { 
    // const v = useState("");
    // const nome = v[0];
    // const setNome = v[1];
    const [nome, setNome] = useState("");
    return (
        <View>
            <Text>Nome:</Text>
            <TextInput value={nome} 
                onChangeText={(txt)=>{
                    setNome(txt);
                }}/>
            <Button title="Gravar" 
                onPress={() => { 
                    const lista = {...props.lista};
                    lista.push(nome);
                    props.setLista(lista);
                }}/>
        </View>
    );
}

const Listar = () => { 
    const listaDisplay = [];
    for (let i=0; i < props.lista.lenght; i++) { 
        listaDisplay.push(<Text>{props.lista[i]}</Text>);
    }
    return (
        <View>
            <Text></Text>
            {listaDisplay}
        </View>
    );
}

export default () => { 
    const [nomes, setNomes] = useState([]);
    return (
        <View style={{flex: 1}}>
            <NavigationContainer>
                <Tab.Navigator>
                  <Tab.Screen name="Cadastro">
                    {() => <Formulario {...this.props} 
                                setLista={setNomes} lista={nomes}/>} 
                  </Tab.Screen>
                  <Tab.Screen name="Listar">          
                    {() => <Listar {...this.props} lista={nomes}/>}
                  </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}https://github.com/antoniorcn/fecaf-2022-1s