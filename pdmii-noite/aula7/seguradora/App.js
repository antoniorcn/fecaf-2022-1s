import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Cadastro = (props) => { 
  // Com variaveis normais
  // let nome = "João Silva";

  // Usando Hooks
  // const vetor = useState("");
  // const nome = vetor[0];
  // const setNome = vetor[1];

  // Usando Hooks com operador de desestruturação
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [idade, setIdade] = useState("0");
  
  return (
    <View>
      <Text>Cadastro</Text>
      <Text></Text>
      <TextInput placeholder="Nome Completo" value={nome} 
                 onChangeText={(txt) => {
                      setNome(txt);
                      // alert("Nome: " + nome);
                      }}/>
      <TextInput placeholder="CPF" 
            value={cpf} onChangeText={setCpf}/>
      <TextInput placeholder="Idade" 
            value={idade} onChangeText={setIdade}/>
      <Button title="Gravar" onPress={
        () => { 
          const obj = {
              nome : nome,
              cpf: cpf,
              idade: idade};

          const listaTemp = [...props.lista];
          listaTemp.push(obj);
          props.setLista(listaTemp);

          alert("A Lista contem " + 
                 listaTemp.length + " elementos");
        }
       }/>
    </View>
  )
}




const Lista = (props) => { 
  // const lista = [
  //     {nome: "João Silva", cpf: "111111111", idade: "28"},
  //     {nome: "Maria Silva", cpf: "222222222", idade: "20"},
  //     {nome: "José Silva", cpf: "333333333", idade: "22"},
  //     {nome: "Ana Carolina", cpf: "4444444444", idade: "21"}
  //  ];
  const listaTela = [
  ];
  for(let i = 0; i < props.lista.length; i++) {
    const obj = props.lista[i];
    listaTela.push(
      <View>
        <Text></Text>
        <Text>Nome: {obj.nome} </Text>
        <Text>Cpf: {obj.cpf}</Text>
        <Text>Idade: {obj.idade}</Text>
      </View>
    );
  }
   return (
    <View>
      <Text>Lista</Text>
      {listaTela}
    </View>
   );
}


const Principal = (props) => { 

  const [lista, setLista] = useState([]);

  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Cadastro">
            {() => <Cadastro {...props} lista={lista} setLista={setLista}/>}
          </Tab.Screen>
          <Tab.Screen name="Lista">
            {() => <Lista {...props} lista={lista} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default Principal;