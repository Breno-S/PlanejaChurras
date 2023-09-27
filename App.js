import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { useFonts, Karantina_400Regular } from '@expo-google-fonts/karantina';

import CustomDrawer from './src/components/CustomDrawer/CustomDrawer';
import ButtonCardapio from './src/components/ButtonCardapio/ButtonCardapio';

import HomePage from './src/pages/HomePage/HomePage';
import NovoChurrasco from './src/pages/NovoChurrasco/NovoChurrasco';
import InfoChurras from './src/pages/InfoChurras/InfoChurras';

const Drawer = createDrawerNavigator();

export default function App() {
  // carrega a fonte karantina
  let [fontsLoaded, fontError] = useFonts({
    Karantina_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        // opções da barra superior do aplicativo
        screenOptions={{
          drawerPosition: 'right',
          drawerStyle: { backgroundColor: '#0000000' },
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: {color: '#fff', fontFamily: 'Karantina_400Regular', fontSize: 40},
          headerLeft: () => null,
          headerRight: () => <ButtonCardapio />,
        }}
        initialRouteName="HomePage"
        // propriedade que define o Drawer customizado
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="HomePage" component={HomePage} options={ {title: "PLANEJA CHURRAS", } }/>
        <Drawer.Screen name="NovoChurras" component={NovoChurrasco} options={ {title: "PLANEJA CHURRAS",} }/>
        <Drawer.Screen name="InfoChurras" component={InfoChurras} options={ {title: "PLANEJA CHURRAS",} }/>
        {/* <Drawer.Screen name="" component={null} options={ {title: "", headerTitleStyle: {color: '#fff'} } }/> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}