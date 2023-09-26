import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

export default function CustomDrawer({ navigation }) {
  return (
    // Fundo do Drawer/ Drawer itself
    <DrawerContentScrollView contentContainerStyle={{backgroundColor: '#000'}}>

          {/* Opção Home */}
            <DrawerItem
              label={"1"}
              labelStyle={ {color: '#fff'} }
              icon={() => null}
              onPress={() => navigation.navigate("HomePage")}
              // focused={true}
              // activeTintColor="#5203FC00"
            />

            {/* Opção Novo Churrasco */}
            <DrawerItem
              label={"2"}
              labelStyle={ {color: '#fff'} }
              icon={() => null}
              onPress={() => navigation.navigate("NovoChurrasco")}
              // focused={true}
              // activeTintColor="#5203FC"
            />

	</DrawerContentScrollView>

  );
}

const styles = StyleSheet.create({
  
});