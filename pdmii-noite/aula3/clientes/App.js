import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { NavigationContainer } 
                   from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import { createBottomTabNavigator } 
//                    from '@react-navigation/bottom-tabs'; 


// const Tab = createBottomTabNavigator();
const Tab = createDrawerNavigator();

function Principal() { 
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cadastro" component={Cadastrar}/>
        <Tab.Screen name="Lista" component={Listar}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Listar() { 
  return (
    <View>
      <Text>Lista</Text>
      <Text></Text>
      <Text>João Silva</Text>
      <Text>(11)1231-3453</Text>
      <Text></Text>
      <Text>Maria Silva</Text>
      <Text>Alfredo José</Text>
      <Text>(11)6786-3453</Text>
    </View>
  );
}

function Cadastrar(){ 
  return(
    <View>
      <Text>Cadastro</Text>
      <Text></Text>
      <Text>Nome:</Text>
      <TextInput/>
      <Text>Telefone: </Text>
      <TextInput/>
      <Button title='Salvar'/>
    </View>
  );
}
export default Principal;

