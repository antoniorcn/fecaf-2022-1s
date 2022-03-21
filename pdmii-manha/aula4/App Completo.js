import React, {useState} from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet, 
ImageBackground, TouchableHighlight, ToastAndroid} from 'react-native';
import PetImage from './assets/pets.png';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

const Cadastrar = (props) => { 
  const [nome, setNome] = useState("");
  const [raca, setRaca] = useState("");
  const [peso, setPeso] = useState("");
  const [nascimento, setNascimento] = useState("");
  return (
    <View>
      <TextInput placeholder="Nome do Pet" style={styles.input} value={nome} 
                  onChangeText={(txt)=>{setNome(txt)}}/>
      <TextInput placeholder="Raça" style={styles.input} value={raca} 
                  onChangeText={(txt)=>{setRaca(txt)}}/>
      <TextInput placeholder="Peso" style={styles.input} value={peso} 
                  onChangeText={(txt)=>{setPeso(txt)}}/>
      <TextInput placeholder="Nascimento dd/mm/aaaa" style={styles.input} value={nascimento} 
                  onChangeText={(txt)=>{setNascimento(txt)}}/>
      <TouchableHighlight onPress={() => {
        const listaNova = [...props.lista];
        listaNova.push({nome: nome, raca: raca, peso: peso, nascimento: nascimento});
        props.setLista(listaNova);
      }}>
        <Text style={styles.botao}>Cadastrar</Text>
      </TouchableHighlight>
    </View>
  );
}

const Pet = (props) => { 
  return (
    <View style={{marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 10}}>
      <Text style={{fontWeight: "bold"}}>{props.nome}</Text>
      <Text style={{color: "gray"}}>{props.raca} - {props.peso}Kg - {props.nascimento}</Text>
    </View>
  )
}

const Listar = (props) => { 

  const listaView = [];
  const lista = props.lista;

  for (let i = 0; i < lista.length; i++) { 
    const pet = lista[i];
    listaView.push(
      <Pet nome={pet.nome} peso={pet.peso} nascimento={pet.nascimento} raca={pet.raca}/>
    )
  }

  return (
    <View>
      {listaView}
    </View>
  )
}

export default function App() {

  const [listaPets, setListaPets] = useState([
    {nome: "Mike", peso: "11.4", nascimento: "20/08/2020", raca: "Vira Lata"},
    {nome: "Fido", peso: "5.4", nascimento: "01/04/2021", raca: "Poodle Toy"},
  ]);

  return (
      <View style={styles.principal}>
        <ImageBackground source={PetImage} style={styles.image}
                  width="500" height="500">
          <Text style={styles.titulo}>PETS</Text>
        </ImageBackground>
        <View style={styles.tela}> 
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Cadastrar">
              {() => <Cadastrar {...this.props} setLista={setListaPets} lista={listaPets}/>} 
              </Tab.Screen>
              <Tab.Screen name="Listar">
                {() => <Listar {...this.props} lista={listaPets}/>} 
              </Tab.Screen>
            </Tab.Navigator>    
          </NavigationContainer>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  principal: { 
    flex: 1
  },

  image: { 
    flex: 1,
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "strech"
  },

  tela: { 
    flex: 2
  },

  titulo: { 
    backgroundColor: "rgba(150, 150, 150, 0.70)",
    fontSize: 32,
    textAlign: "center",
    color: "orange",
    textShadowOffset: {width: 1, height: 1},
    textShadowColor: "white",
    textShadowRadius: 1
  },

  input: { 
    marginTop: 25,
    borderBottomColor: "gray",
    borderBottomWidth: 1
  },

  botao: { 
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#87ceeb",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  }

});
