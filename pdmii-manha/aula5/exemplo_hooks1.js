import React, {useState} from 'react';
import {Alert, Button, Text, View} from 'react-native';

// var count = 30;

// const simpleAlertHandler = () => {
//   alert('Contador em ==> '+ count);
// };

export default () => { 

  // const v = useState(0);
  // let count = v[0];
  // let setCount = v[1]; 

  const [count, setCount] = useState(0);

  return (
    <View>
      <Text> Contador {count}</Text>
      <Button title="Incrementar" 
              onPress = {() => { 
                setCount( count + 0.05 );
                // alert('Valor do count ==> '+ count);
              }}/>
      <Button title="Decrementar"
              onPress = {() => { 
                setCount( count - 0.05);
              }}/>
    </View>
  )
}
