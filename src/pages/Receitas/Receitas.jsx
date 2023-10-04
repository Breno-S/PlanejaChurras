import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity
} from "react-native";
import { useFonts, Karantina_400Regular } from "@expo-google-fonts/karantina";
import { React, useState, useEffect } from "react";

import ListaReceitas from "../../components/ListaReceitas/ListaReceitas";

export default function Receitas({}) {
  const windowWidth = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>RECEITAS</Text>
        <View style={styles.underline}></View>
        <View style={[styles.underlineGray, { width: windowWidth }]}></View>

        <View style={styles.content}>
            <View style={styles.list}>
                <TouchableOpacity>
                    <Text style={styles.textButton}>BOVINAS</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textButton}>SUINAS</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textButton}>FRANGO</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#191B1B",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
    backgroundColor: "#191B1B",
    borderTopColor: "#282C2D",
    borderTopWidth: 1,
  },
  title: {
    fontFamily: "Karantina_400Regular",
    fontSize: 30,
    color: "#fff",
    marginTop: 40,
    letterSpacing: 2,
    fontWeight: "bold",
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    width: 100,
    marginTop: 5,
  },
  underlineGray: {
    borderBottomWidth: 1,
    borderBottomColor: "#282C2D",
    marginTop: 20,
  },
  content : {

  },
  list : {
    display : 'flex',
  },
  textButton : {
    color : '#fff',
    fontFamily: 'Karantina_400Regular', 
    fontSize : 24
  }
});
