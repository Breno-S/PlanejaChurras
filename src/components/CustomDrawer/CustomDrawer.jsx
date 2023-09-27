import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Dimensions } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons'
import Logo from "../../../assets/images/icon-churras.png"

const Icon_Grelha = <Icon name="outdoor-grill" size={30} color="#9A1A1A" />
const Icon_Home = <Icon name="home" size={30} color="#9A1A1A" />

const windowHeight = Dimensions.get('window').height;

export default function CustomDrawer({ navigation }) {
  return (
    // Fundo do Drawer/ Drawer itself
    <>
    <StatusBar />
    <DrawerContentScrollView contentContainerStyle={{flex: 1, backgroundColor: '#191B1B'}}>
      
      {/* Header do Drawer */}
      <View>
        <Image source={Logo} style={ {width: 180, height: 180, alignSelf: 'center'} }/>
      </View>

      {/* Main do Drawer */}
      <View style={ {} }>
      <DrawerItem
        label={"Home"}
        labelStyle={ {color: '#fff'} }
        icon={() => Icon_Home}
        onPress={() => navigation.navigate("HomePage")}
      />

      <DrawerItem
        label={"Novo Churrasco"}
        labelStyle={ {color: '#fff'} }
        icon={() => Icon_Grelha}
        onPress={() => navigation.navigate("NovoChurras")}
      />
      
      </View>

	  </DrawerContentScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  
});