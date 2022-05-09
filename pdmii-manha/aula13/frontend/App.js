import React, {useState} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import axios from 'axios';

const api = axios.create({ 
  baseURL: "https://seguradora-aula13.antonio-neto.repl.co"
});

function Principal() { 
  const [log, setLog] = useState("");
  return (
    <View>
      <Text></Text>
      <Text>Pressione para resetar o banco de dados</Text>
      <Button title="Reset"
              onPress={() => {
                setLog("Executado");
                api.get("/reset", {})
                .then( (resposta)=> {
                  setLog("Tabela resetada com sucesso" + resposta);
                 })
                .catch( (erro)=> { 
                  setLog("Erro ao executar a tabela" + erro);
                })
              }}
      />
      <Text>Log: {log}</Text>
    </View>
  );
}

export default Principal;