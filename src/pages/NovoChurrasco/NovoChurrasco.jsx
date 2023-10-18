import { useCallback, useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import { TextInput } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../../styles/globalStyles';
import SliderInput from '../../components/SliderInput/SliderInput';
import CheckBoxes from '../../components/CheckBoxes/CheckBoxes';

const Icon_Edit = () => <Icon name="pencil-square-o" size={32} color="#fff" style={ {margin: 10} }/>;

const windowWidth = Dimensions.get('window').width;

export default function NovoChurrasco(){
  const navigation = useNavigation();

  
  const [infoInput, setinfoInput] = useState([
    {
      nomeChurras: "Novo Churrasco",
      qtdAdultos: "0",
      qtdJovens: "0",
      qtdCriancas: "0",
      cBovinas: [],
      cSuinas: [],
      cFrango: [],
      Bebidas: [],
      Acomp: [],
      Suprim: []
    },
  ]);

    // Este useEffect será acionado quando a tela for montada e quando você voltar para ela
    // useEffect(() => {
    //   const unsubscribe = navigation.addListener('blur', () => {
    //     // Reseta os valores quando a tela é desfocada (quando você sai dela)
    //     setinfoInput({
    //       // nomeChurras: "Novo Churrasco",
    //       qtdAdultos: "0",
    //       qtdJovens: "0",
    //       qtdCriancas: "0",
    //       cBovinas: [],
    //       cSuinas: [],
    //       cFrango: [],
    //       Bebidas: [],
    //       Acomp: [],
    //       Suprim: []
    //     });
    //   });
  
    //   return unsubscribe;
    // }, [navigation]);


  const handleNomeChurras = (nomeChurras) => {
    const updatedinfoInput = [...infoInput];
    updatedinfoInput[0].nomeChurras = nomeChurras;
    setinfoInput(updatedinfoInput);
  };

  const handleAdultos = (qtdAdultos) => {
    const updatedinfoInput = [...infoInput];
    updatedinfoInput[0].qtdAdultos = qtdAdultos;
    setinfoInput(updatedinfoInput);
  };
  const handleJovens = (qtdJovens) => {
    const updatedinfoInput = [...infoInput];
    updatedinfoInput[0].qtdJovens = qtdJovens;
    setinfoInput(updatedinfoInput);
  };
  const handleCriancas = (qtdCriancas) => {
    const updatedinfoInput = [...infoInput];
    updatedinfoInput[0].qtdCriancas = qtdCriancas;
    setinfoInput(updatedinfoInput);
  };

  const handleBovinas = (selectedItems) => {
    const updatedinfoInput = [...infoInput];
    updatedinfoInput[0].cBovinas = selectedItems;
    setinfoInput(updatedinfoInput);
  };
  const handleSuinas = (selectedItems) => {
    const updatedinfoInput = [...infoInput];
    updatedinfoInput[0].cSuinas = selectedItems;
    setinfoInput(updatedinfoInput);
  };
  const handleFrango = (selectedItems) => {
    const updatedinfoInput = [...infoInput];
    updatedinfoInput[0].cFrango = selectedItems;
    setinfoInput(updatedinfoInput);
  };
  const handleBebidas = (selectedItems) => {
    const updatedinfoInput = [...infoInput];
    updatedinfoInput[0].Bebidas = selectedItems;
    setinfoInput(updatedinfoInput);
  };
  
  const handleAcomp = (selectedItems) => {
    const updatedinfoInput = [...infoInput];
    updatedinfoInput[0].Acomp = selectedItems;
    setinfoInput(updatedinfoInput);
  };
  const handleSuprim = (selectedItems) => {
    const updatedinfoInput = [...infoInput];
    updatedinfoInput[0].Suprim = selectedItems;
    setinfoInput(updatedinfoInput);
  };

  const textInputRef = useRef(null);

  const handleIconPress = () => {
    // Foca no TextInput quando o ícone é pressionado
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };
  
  return(
    <ScrollView style={styles.scrollView}> 
      <View style={styles.container}>
        <View style={ {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'} }>
          <TextInput ref={textInputRef} onChangeText={handleNomeChurras} style={ [globalStyles.text, styles.title] }>Novo Churrasco</TextInput>
            <TouchableOpacity onPress={handleIconPress}>
              <Icon_Edit />
            </TouchableOpacity>
        </View>
        
        <SliderInput type="Adultos" onValueChange={handleAdultos}/>
        <SliderInput type="Jovens" onValueChange={handleJovens}/>
        <SliderInput type="Crianças" onValueChange={handleCriancas}/>

        <CheckBoxes type="Carnes Bovinas"onValueChange={handleBovinas} />
        <CheckBoxes type="Carnes Suínas"onValueChange={handleSuinas} />
        <CheckBoxes type="Carnes de Frango"onValueChange={handleFrango} />
        <CheckBoxes type="Bebidas" onValueChange={handleBebidas} />
        <CheckBoxes type="Acompanhamentos"onValueChange={handleAcomp} />
        <CheckBoxes type="Suprimentos"onValueChange={handleSuprim} />

        
        <TouchableOpacity style={ styles.newButton} onPress={() => navigation.navigate("InfoChurras", {infoInput})}>
          <Text style={ {fontFamily: 'Graduate_400Regular', color: '#fff', textAlign: 'center'} }>Informações{'\n'}do Churras</Text>
        </TouchableOpacity>
        


                      
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1
  },
  slider: {
    backgroundColor: '#282D2D',
    marginHorizontal: 10,
    height: 50,
  },
  title: {
    fontFamily: 'Karantina_400Regular', 
    fontSize: 30, 
    color: '#fff', 
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: windowWidth-(windowWidth/5),
  },
  scrollView: {
    backgroundColor: "#000",
  },
  newButton: {
    margin: 32,
    alignSelf: 'center',
    backgroundColor: '#EF820D',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 30,
    elevation: 2,
  },
  hr: {
    width: windowWidth,
    borderBottomWidth: 1,
    borderBottomColor: '#282D2D',
    marginTop: 5,
    marginBottom: 10
  },

})