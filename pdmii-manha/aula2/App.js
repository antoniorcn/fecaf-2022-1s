import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Principal = () => { 
  return (
  <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Tela 1" component={Pagina1}/>
        <Tab.Screen name="Tela 2" component={Pagina2}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}
const Pagina1 = () => { 
  return (
    <View>
      <Text>Pagina 1</Text>
    </View>
  );
}
const Pagina2 = () => { 
  return (
    <View>
      <Text>Pagina 2</Text>
    </View>
  );
}
export default Principal;

