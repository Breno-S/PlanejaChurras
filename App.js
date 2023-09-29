import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { globalStyles } from './src/styles/globalStyles';

import { useFonts, Karantina_400Regular} from '@expo-google-fonts/karantina';
import { Graduate_400Regular } from '@expo-google-fonts/graduate';

import CustomDrawer from './src/components/CustomDrawer/CustomDrawer';
import ButtonCardapio from './src/components/ButtonCardapio/ButtonCardapio';

import HomePage from './src/pages/HomePage/HomePage';
import NovoChurrasco from './src/pages/NovoChurrasco/NovoChurrasco';
import InfoChurras from './src/pages/InfoChurras/InfoChurras';
import DetalheChurras from './src/pages/DetalheChurras/DetalheChurras';


const Drawer = createDrawerNavigator();

export default function App() {
  // carrega as fontes
  let [fontsLoaded, fontError] = useFonts({
    Karantina_400Regular,
    Graduate_400Regular
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
          headerTitleStyle: [globalStyles.text,  { fontSize: 40 }],
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
        <Drawer.Screen name="DetalheChurras" component={DetalheChurras} options={ {title: "PLANEJA CHURRAS",} }/>
        {/* <Drawer.Screen name="" component={null} options={ {title: "", headerTitleStyle: {color: '#fff'} } }/> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}