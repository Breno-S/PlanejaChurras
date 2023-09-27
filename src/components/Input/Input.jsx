import {React, useState, useEffect} from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { useFonts, Karantina_400Regular } from "@expo-google-fonts/karantina";

export default function Input({ type, label, onValueChange  }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);

    if (onValueChange) {
      onValueChange(text);
    }
  };

  const renderInput = () => {
    switch (type) {
      case "text":
        return (
          <View style={styles.contentInput}>
            <Text style={styles.text}>{label}</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleInputChange}
              value={inputValue}
            />
          </View>
        );
      case "number":
        return (
          <View style={styles.contentInput}>
            <Text style={styles.text}>{label}</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={handleInputChange}
              value={inputValue}
            />
          </View>
        );
      case "cel":
        return (
          <View style={styles.contentInput}>
            <Text style={styles.text}>{label}</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              onChangeText={handleInputChange}
              value={inputValue}
            />
          </View>
        );
    }
  };

  return <View>{renderInput()}</View>;
}

const styles = StyleSheet.create({
  contentInput: {
    margin: 20,
  },
  input: {
    borderBottomColor: "#EF820D",
    borderBottomWidth: 1,
    padding: 10,
    color: "#fff",
    width: 300,
  },
  text: {
    color: "#fff",
    fontFamily: "Karantina_400Regular",
    fontSize: 24,
    letterSpacing: 1,
    marginBottom: 5,
  },
});
