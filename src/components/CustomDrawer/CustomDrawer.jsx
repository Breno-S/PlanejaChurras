import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Dimensions } from "react-native";

import Logo from "../../../assets/images/icon-churras.png"

const windowHeight = Dimensions.get('window').height;

export default function CustomDrawer({ navigation }) {
  return (
    // Fundo do Drawer/ Drawer itself
    <DrawerContentScrollView contentContainerStyle={{backgroundColor: '#000'}}>
      {/* Header do Drawer */}
      <View>
        <Image source={Logo}/>
        <Text>""</Text>
      </View>

	</DrawerContentScrollView>

  );
}

const styles = StyleSheet.create({
  
});