import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Cadastro (props) { 
  const [nome, setNome] = useState("");
  return (
    <View>
      <Text>Cadastro</Text>
      <TextInput placeholder="Nome:" 
                 value={nome} onChangeText={setNome}/>
      <Button title="Salvar" onPress={() => {
          props.adicionar({nome: nome});
      }}/>
    </View>
  );
}

const Listar = (props) => { 
  const listaTela = [];
  for(let i=0; i < props.lista.length; i++) { 
    let obj = props.lista[i];
    listaTela.push(<Text>{obj.nome}</Text>);
  }
  return (
    <View>
      <Text>Listar</Text>
      {listaTela}
    </View>
  );
}


export default Principal = () => { 
  
  // const matriz = useState([]);
  // const lista = matriz[0];
  // const setLista = matriz[1];

 const [lista, setLista] = useState([]);

 const adicionar = (objeto) => { 
    const listaTemp = [...lista];
    listaTemp.push(objeto);
    setLista(listaTemp);
 }
    
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cadastro">
            { (props) => <Cadastro {...props} 
                adicionar={(obj)=>{adicionar(obj)}}/> }
        </Tab.Screen>
        <Tab.Screen name="Lista">
            { (props) => <Listar {...props} 
                lista={lista}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default Principal;