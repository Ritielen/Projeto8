import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screens/Home';
import Cardapio from './screens/Cardapio';
import ListarCardapio from './screens/CardapioListar';
import Restaurantes from './screens/Restaurantes';
import Promocao from './screens/Promocao';

import { useEffect } from 'react';
import { Database } from './database/Database';

const Drawer = createDrawerNavigator();

export default function App() {
  useEffect(() => {
    Database.initDb().then(() => console.log('Banco Inicializado!'));
    // Database.ReinitDb().then(() => console.log('Banco Reinicializado!'));
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#000000', // fundo preto
          },
          drawerLabelStyle: {
            fontWeight: 'bold',
          },
          drawerActiveBackgroundColor: '#e59a59', // fundo amarelo para item ativo
          drawerActiveTintColor: '#000000', // texto preto no item ativo
          drawerInactiveTintColor: '#ffffff', // texto branco nos outros
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            color: '#000000',
          },
        }}
      >
        <Drawer.Screen name='Página Inicial' component={Home} />
        <Drawer.Screen name='Cadastro de Cardápios' component={Cardapio} />
        <Drawer.Screen name='Listar Cardápios' component={ListarCardapio} />
        <Drawer.Screen name='Restaurantes' component={Restaurantes} />
        <Drawer.Screen name='Promoções' component={Promocao} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
