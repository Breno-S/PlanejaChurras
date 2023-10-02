import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { globalStyles } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import SliderInput from '../../components/SliderInput/SliderInput';
import CheckBoxes from '../../components/CheckBoxes/CheckBoxes';

const Icon_Edit = () => <Icon name="pencil-square-o" size={32} color="#fff" style={ {margin: 10} }/>;

const windowWidth = Dimensions.get('window').width;

export default function NovoChurrasco(){

  const [infoInput, setInfoInput] = useState([
    {
      qtdAdultos: "",
      qtdJovens: "",
      qtdCriancas: "",

    },
  ]);

  const handleAdultos = (qtdAdultos) => {
    const updatedInfoInput = [...infoInput];

    updatedInfoInput[0].qtdAdultos = qtdAdultos;

    setInfoInput(updatedInfoInput);
  };
  const handleJovens = (qtdJovens) => {
    const updatedInfoInput = [...infoInput];

    updatedInfoInput[0].qtdJovens = qtdJovens;

    setInfoInput(updatedInfoInput);
  };
  const handleCriancas = (qtdCriancas) => {
    const updatedInfoInput = [...infoInput];

    updatedInfoInput[0].qtdCriancas = qtdCriancas;

    setInfoInput(updatedInfoInput);
  };

    
    
  return(
    <ScrollView style={styles.scrollview}> 
      <View style={styles.container}>
        <View style={ {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'} }>
          <TextInput style={ [globalStyles.text, styles.title] }>Nome do Churrasco </TextInput>
            <TouchableOpacity onPress={null}>
              <Icon_Edit />
            </TouchableOpacity>
        </View>
        
        <SliderInput type="Adultos" onValueChange={handleAdultos}/>
        <SliderInput type="Jovens" onValueChange={handleJovens}/>
        <SliderInput type="Crianças" onValueChange={handleCriancas}/>

        <CheckBoxes type="Carnes Bovinas"/>
        <CheckBoxes type="Carnes Suínas"/>
        <CheckBoxes type="Carnes de Frango"/>
        <CheckBoxes type="Bebidas"/>
        <CheckBoxes type="Acompanhamentos"/>
        <CheckBoxes type="Suprimentos"/>
        


                      
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
    backgroundColor: "#191B1B",
  },

})