import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import { useFonts, Karantina_400Regular } from "@expo-google-fonts/karantina";
import { React, useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import { useNavigation } from '@react-navigation/native';

export default function InfoChurras({ info }) {
  const windowWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  const [infoInput, setInfoInput] = useState([
    {
      nome: "",
      telefone: "",
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
      municipio: "",
      estado: "",
    },
  ]);

  const handleNome = (nome) => {
    const updatedInfoInput = [...infoInput];

    updatedInfoInput[0].nome = nome;

    setInfoInput(updatedInfoInput);
  };
  const handleTelefone = (tel) => {
    const updatedInfoInput = [...infoInput];

    updatedInfoInput[0].telefone = tel;

    setInfoInput(updatedInfoInput);

  };
  const handleCep = (cep) => {
    const updatedInfoInput = [...infoInput];

    updatedInfoInput[0].cep = cep;

    setInfoInput(updatedInfoInput);
  };
  const handleLogradouro = (logradouro) => {
    const updatedInfoInput = [...infoInput];

    updatedInfoInput[0].logradouro = logradouro;

    setInfoInput(updatedInfoInput);
  };
  const handleNumero = (numero) => {
    const updatedInfoInput = [...infoInput];

    updatedInfoInput[0].numero = numero;

    setInfoInput(updatedInfoInput);
  };
  const handleComplemento = (complemento) => {
    const updatedInfoInput = [...infoInput];

    updatedInfoInput[0].complemento = complemento;

    setInfoInput(updatedInfoInput);
  };
  const handleMunicipio = (municipio) => {
    const updatedInfoInput = [...infoInput];

    updatedInfoInput[0].municipio = municipio;

    setInfoInput(updatedInfoInput);
  };
  const handleEstado = (estado) => {
    const updatedInfoInput = [...infoInput];

    updatedInfoInput[0].estado = estado;

    setInfoInput(updatedInfoInput);
  };

  const handleButtonPress = () => {
    navigation.navigate('DetalheChurras', { infoInput });
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>INFORMAÇÕES DO CHURRAS</Text>
        <View style={styles.underline}></View>
        <View style={[styles.underlineGray, { width: windowWidth }]}></View>
        <View style={styles.content}>
          <Text style={styles.titleContent}>Informações do Anfitrião</Text>

          <View style={styles.input}>
            <Input type={"text"} label={"Nome"} onValueChange={handleNome} />
            <Input
              type={"cel"}
              label={"Telefone"}
              onValueChange={handleTelefone}
            />
          </View>
          <View style={[styles.underlineGray, { width: windowWidth }]}></View>

          <Text style={styles.titleContent}>Local</Text>

          <View style={styles.input}>
            <Input type={"number"} label={"CEP"} onValueChange={handleCep} />
            <Input
              type={"text"}
              label={"Logradouro"}
              onValueChange={handleLogradouro}
            />
            <Input type={"number"} label={"Nº"} onValueChange={handleNumero} />
            <Input
              type={"text"}
              label={"Complemento"}
              onValueChange={handleComplemento}
            />
            <Input
              type={"text"}
              label={"Municipio"}
              onValueChange={handleMunicipio}
            />
            <Input
              type={"text"}
              label={"Estado"}
              onValueChange={handleEstado}
            />
          </View>

          <View style={[styles.underlineGray, { width: windowWidth }]}></View>

          <View style={styles.containerButton}>
            <View style={styles.contentButton}>
              <Button
                onPress={handleButtonPress}
                color="#fff"
                title="PROSSEGUIR"
                style={styles.button}
              />
            </View>
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
    width: 240,
    marginTop: 5,
  },
  underlineGray: {
    borderBottomWidth: 1,
    borderBottomColor: "#282C2D",
    marginTop: 20,
  },
  content: {
    flex: 1,
  },
  titleContent: {
    fontFamily: "Karantina_400Regular",
    fontSize: 26,
    color: "#fff",
    letterSpacing: 2,
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 20,
    textAlign: "left",
  },
  input: {
    alignItems: "center",
  },
  containerButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 80,
  },
  contentButton: {
    backgroundColor: "#EF820D",
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
