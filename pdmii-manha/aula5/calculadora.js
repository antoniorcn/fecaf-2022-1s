import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';


const Botao = (props) => { 
  return ( 
    <TouchableHighlight onPress={()=>{
      props.mudar(props.title);
    }}>
      <View {...props}>
        <Text style={{textAlign: "center"}}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default () => { 

  const [valor, setValor] = useState(0);

  return (
    <View style={{flexDirection: "column", flex: 1}}>
      <View style={{flexDirection: "row", flex: 1}}>
        <Text style={{flex: 4}}>{valor}</Text>
        <Botao style={estilo.botao} title="CE" mudar={setValor}/>
      </View>
      <View style={{flexDirection: "row", flex: 1}}>
        <Botao title="1" style={estilo.botao} mudar={setValor}/>
        <Botao title="2" style={estilo.botao} mudar={setValor}/>
        <Botao title="3" style={estilo.botao} mudar={setValor}/>
        <Botao title="+" style={estilo.botao} mudar={setValor}/>
      </View>
      <View style={{flexDirection: "row", flex: 1}}>
        <Botao title="4" style={estilo.botao} mudar={setValor}/>
        <Botao title="5" style={estilo.botao} mudar={setValor}/>
        <Botao title="6" style={estilo.botao} mudar={setValor}/>
        <Botao title="-" style={estilo.botao} mudar={setValor}/>
      </View>
      <View style={{flexDirection: "row", flex: 1}}>
        <Botao title="7" style={estilo.botao} mudar={setValor}/>
        <Botao title="8" style={estilo.botao} mudar={setValor}/>
        <Botao title="9" style={estilo.botao} mudar={setValor}/>
        <Botao title="*" style={estilo.botao} mudar={setValor}/>
      </View>            
      <View style={{flexDirection: "row", flex: 1}}>
        <Botao title="." style={estilo.botao} mudar={setValor}/>
        <Botao title="0" style={estilo.botao} mudar={setValor}/>
        <Botao title="=" style={estilo.botao} mudar={setValor}/>
        <Botao title="/" style={estilo.botao} mudar={setValor}/>
      </View>                  
    </View>
  )
}


const estilo = StyleSheet.create({ 
  botao: { 
    flex: 1, 
    backgroundColor: "lightskyblue",
    width: 84,
    height: 50,
  }
});
