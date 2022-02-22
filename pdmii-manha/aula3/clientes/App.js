import { StatusBar } from 'expo-status-bar';
import { Button, Text, 
  TextInput, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import img from "./assets/favicon.png";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Alterei o app.js
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Principal() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Cadastro" component={Cadastro}/>
        <Drawer.Screen name="Listar" component={Listar}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


function Cadastro() { 
  return (
    <View>
      <Text>Cadastro de Clientes</Text>
      <Image source={img} width="100" height="100"/>
      <Text></Text>
      <Text>Nome:</Text>
      <TextInput/>
      <Text>Telefone:</Text>
      <TextInput/>
      <Button title="Salvar"/>
    </View>
  );
}


function Listar() { 
  return (
    <View>
      <Text>Maria Silva</Text>
      <Text>(11)3453-4564</Text>
      <Text></Text>
      <Text>Alfredo José</Text>
      <Text>(11)6453-3452</Text>
    </View>
  );
}

export default Principal;
