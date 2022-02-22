import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } 
from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Principal = () => { 
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tela 1" component={Tela1}/>
        <Tab.Screen name="Tela 2" component={Tela2}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tela1 = () => { 
  return (
    <View>
      <Text>*** Tela 1 ***</Text>
    </View>
  );
}

const Tela2 = () => { 
  return (
    <View>
      <Text>### Tela 2 ###</Text>
    </View>
  );
}

export default Principal;