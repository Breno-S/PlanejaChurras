import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import CustomDrawer from './src/components/CustomDrawer/CustomDrawer';
import ButtonCardapio from './src/components/ButtonCardapio/ButtonCardapio';

import HomePage from './src/pages/HomePage/HomePage';
import NovoChurrasco from './src/pages/NovoChurrasco/NovoChurrasco';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // opções da barra superior do aplicativo
        screenOptions={{
          drawerStyle: { backgroundColor: '#272929'},
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#000' },
          headerShadowVisible: false,
          headerTitle: '',
          headerRight: () => <ButtonCardapio />,
        }}
        initialRouteName=""
        // propriedade que define o Drawer customizado
        // drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="HomePage" component={HomePage} options={ {title: "", headerTitleStyle: {color: '#fff'} } }/>
        <Drawer.Screen name="NovoChurras" component={NovoChurrasco} options={ {title: "", headerTitleStyle: {color: '#fff'} } }/>
        {/* <Drawer.Screen name="" component={null} options={ {title: "", headerTitleStyle: {color: '#fff'} } }/> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}