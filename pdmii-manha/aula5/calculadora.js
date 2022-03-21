import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';


const Botao = (props) => { 
  return ( 
    <TouchableHighlight onPress={{

    }}>
      <View {...props}>
        <Text style={{textAlign: "center"}}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default () => { 

  

  return (
    <View style={{flexDirection: "column", flex: 1}}>
      <View style={{flexDirection: "row", flex: 1}}>
        <Text style={{flex: 4}}>0</Text>
        <Botao style={estilo.botao} title="CE"/>
      </View>
      <View style={{flexDirection: "row", flex: 1}}>
        <Botao title="1" style={estilo.botao}/>
        <Botao title="2" style={estilo.botao}/>
        <Botao title="3" style={estilo.botao}/>
        <Botao title="+" style={estilo.botao}/>
      </View>
      <View style={{flexDirection: "row", flex: 1}}>
        <Botao title="4" style={estilo.botao}/>
        <Botao title="5" style={estilo.botao}/>
        <Botao title="6" style={estilo.botao}/>
        <Botao title="-" style={estilo.botao}/>
      </View>
      <View style={{flexDirection: "row", flex: 1}}>
        <Botao title="7" style={estilo.botao}/>
        <Botao title="8" style={estilo.botao}/>
        <Botao title="9" style={estilo.botao}/>
        <Botao title="*" style={estilo.botao}/>
      </View>            
      <View style={{flexDirection: "row", flex: 1}}>
        <Botao title="." style={estilo.botao}/>
        <Botao title="0" style={estilo.botao}/>
        <Botao title="=" style={estilo.botao}/>
        <Botao title="/" style={estilo.botao}/>
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
