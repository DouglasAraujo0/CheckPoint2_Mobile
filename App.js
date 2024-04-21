import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/telas/Home';
import Detalhes from './src/telas/Detalhes';
import Carrinho from './src/telas/Carrinho';
import SobreNos from './src/telas/SobreNos';
import Descricao from './src/telas/Descricao';
import {CarrinhoProvider} from './src/context/CarrinhoContext';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <CarrinhoProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Detalhes' component={Detalhes}/>
            <Stack.Screen name='Carrinho' component={Carrinho} />
            <Stack.Screen name='SobreNos' component={SobreNos}/>
            <Stack.Screen name='Descricao' component={Descricao}/>  
          </Stack.Navigator>
        </CarrinhoProvider>
      </NavigationContainer>

  );
}
