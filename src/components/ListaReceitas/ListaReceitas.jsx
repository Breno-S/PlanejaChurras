import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useFonts, Karantina_400Regular } from "@expo-google-fonts/karantina";
import { React, useState, useEffect } from "react";

export default function ListaReceitas({}) {
  const windowWidth = Dimensions.get("window").width;

  return (
    <ScrollView>
      <View>
        <FlatList>
          <View></View>
        </FlatList>
      </View>
    </ScrollView>
  );
}
