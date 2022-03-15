import React from 'react';
import { Button, ImageBackground, Text, TextInput, View, StyleSheet } from 'react-native';
import imagePet from './assets/pets.png';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const ListarPets = () => {
  return (
    <View>
      <View style={estilos.pet}>
        <Text style={estilos.nomePet}>Toto</Text>
        <Text style={estilos.dadosPet}>Vira Lata - 25.4kg - 10/07/2020</Text>
      </View>
      <View style={estilos.pet}>
        <Text style={estilos.nomePet}>Rex</Text>
        <Text style={estilos.dadosPet}>Pastor Alemão - 35.4kg - 1/04/2019</Text>
      </View>      
    </View>
  )
}

const CadastrarPet = () => { 
  return (
    <View>
      <TextInput placeholder="Nome do Pet" style={estilos.input}/>
      <TextInput placeholder="Raça" style={estilos.input}/>
      <TextInput placeholder="Peso" style={estilos.input}/>
      <TextInput placeholder="Nascimento" style={estilos.input}/>
      <Button title="Cadastrar"/>
    </View>
  );
}

export default function App() {
  return (
    <View style={estilos.principal}>
      <View style={estilos.cabecalho}>
        <ImageBackground source={imagePet} style={{ flex: 1 }}>
          <Text style={estilos.titulo}>PETS</Text>
        </ImageBackground>
      </View>
      <View style={estilos.conteudo}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Cadastro" component={CadastrarPet}/>
          <Tab.Screen name="Listar" component={ListarPets}/>          
        </Tab.Navigator>
      </NavigationContainer>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  principal: { flex: 1 },
  cabecalho: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  conteudo: {
    flex: 2,
    backgroundColor: 'cyan',
  },
  titulo: {
    textAlign: 'center',
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    fontSize: 32,
    color: 'orange',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
  },
  nomePet: { 
    fontWeight: "bold",
  },
  dadosPet: { 
    color: "gray",
  },

  pet: {
    paddingLeft: 20,
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "darkgray"
  },

  input: { 
    marginTop: 50,
    paddingBottom: 5,
    borderBottomColor: 'darkgray',
    borderBottomWidth: 2
  }
});
