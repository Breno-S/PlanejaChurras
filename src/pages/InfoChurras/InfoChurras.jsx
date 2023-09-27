import { StyleSheet, Text, View } from "react-native";
import { useFonts, Karantina_400Regular } from "@expo-google-fonts/karantina";
import { React, useState, useEffect } from "react";
import Input from "../../components/Input/Input";

export default function InfoChurras({ info }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>INFORMAÇÕES DO CHURRAS</Text>
        <View style={styles.underline}></View>
        <View style={styles.content}>
          <Text style={styles.titleContent}>Informações do Anfitrião</Text>

          <View>
            <Input type={"text"} label={"Nome"} />
            <Input type={"cel"} label={"Telefone"} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
    width: 240,
    marginTop: 5,
  },
  content: {
    marginTop: 50,
  },
  titleContent: {
    fontFamily: "Karantina_400Regular",
    fontSize: 26,
    color: "#fff",
    letterSpacing: 2,
  },
});
