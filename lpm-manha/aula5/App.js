import * as React from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet, 
ImageBackground, TouchableHighlight, ToastAndroid} from 'react-native';

// You can import from local files
import PetImage from './assets/pets.png';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const Cadastrar = () => { 
  return (
    <View>
      <TextInput placeholder="Nome do Pet" style={styles.input}/>
      <TextInput placeholder="Raça" style={styles.input}/>
      <TextInput placeholder="Peso" style={styles.input}/>
      <TextInput placeholder="Nascimento" style={styles.input}/>
      <TouchableHighlight onPress={() => {console.log("Teste")}}>
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

const Listar = () => { 
  return (
    <View>
      <Pet nome="Mike" peso="11.4" nascimento="28/02/2020" raca="Vira Lata"/>
      <Pet nome="Mike" peso="11.4" nascimento="28/02/2020" raca="Vira Lata"/>
      <Pet nome="Mike" peso="11.4" nascimento="28/02/2020" raca="Vira Lata"/>
      <Pet nome="Mike" peso="11.4" nascimento="28/02/2020" raca="Vira Lata"/>
    </View>
  )
}

export default function App() {
  return (
      <View style={styles.principal}>
        <ImageBackground source={PetImage} style={styles.image}
                  width="500" height="500">
          <Text style={styles.titulo}>PETS</Text>
        </ImageBackground>
        <View style={styles.tela}> 
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Cadastrar" component={Cadastrar} />
              <Tab.Screen name="Listar" component={Listar}/>
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
