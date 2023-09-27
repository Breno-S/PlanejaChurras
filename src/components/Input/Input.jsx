import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { useFonts, Karantina_400Regular } from "@expo-google-fonts/karantina";

export default function Input({ type, label }) {
  const renderInput = () => {
    switch (type) {
      case "text":
        return (
          <View style={styles.contentInput}>
            <Text style={styles.text}>{label}</Text>
            <TextInput style={styles.input} />
          </View>
        );
      case "number":
        return (
          <View style={styles.contentInput}>
            <Text style={styles.text}>Telefone</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
        );
      case "cel":
        return (
          <View style={styles.contentInput}>
            <Text style={styles.text}>{label}</Text>
            <TextInput style={styles.input} keyboardType="phone-pad" />
          </View>
        );
    }
  };

  return <View>{renderInput()}</View>;
}

const styles = StyleSheet.create({
  contentInput: {
    margin: 10,
  },
  input: {
    borderBottomColor: "#EF820D",
    borderBottomWidth: 1,
    padding: 10,
  },
  text : {
    color : "#fff",
    fontFamily: "Karantina_400Regular",
    fontSize: 24,
    letterSpacing : 1
  }
});
