import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import { useFonts, Karantina_400Regular } from '@expo-google-fonts/karantina';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const windowWidth = Dimensions.get('window').width;

export default function CheckBoxes({type, onValueChange}){
  

  const [cBovinas, setcBovinas] = useState([ 
    {label:'Fraldinha [kg]' , selected: false},
    {label:'Contrafilé [kg]', selected: false},
    {label:'Alcatra [kg]'   , selected: false},
    {label:'Picanha [kg]'   , selected: false},
    {label:'Cupim [kg]'     , selected: false}
  ]);

  const toggleCBovinasCheckbox = (index) => {
    const updatedCBovinas = [...cBovinas];
    updatedCBovinas[index].selected = !updatedCBovinas[index].selected;
    setcBovinas(updatedCBovinas);
    onValueChange(updatedCBovinas);
  };

              
  const [cSuinas, setcSuinas] = useState([
    { label: 'Pernil [kg]'  , selected: false },
    { label: 'Lombo [kg]'   , selected: false },
    { label: 'Bisteca [kg]' , selected: false },
    { label: 'Linguiça [kg]', selected: false },
    { label: 'Panceta [kg]' , selected: false }
  ]);

  const toggleCSuinasCheckbox = (index) => {
    const updatedCSuinas = [...cSuinas];
    updatedCSuinas[index].selected = !updatedCSuinas[index].selected;
    setcSuinas(updatedCSuinas);
    onValueChange(updatedCSuinas);
  };
  
  const [cFrango, setcFrango] = useState([
    { label: 'Coxa [kg]'   , selected: false },
    { label: 'Asa [kg]'    , selected: false },
    { label: 'Coração [kg]', selected: false }
  ]);

  const toggleCFrangoCheckbox = (index) => {
    const updatedCFrango = [...cFrango];
    updatedCFrango[index].selected = !updatedCFrango[index].selected;
    setcFrango(updatedCFrango);
    onValueChange(updatedCFrango);
  };

  const [Bebidas, setBebidas] = useState([
    { label: 'Água [2L]'          , selected: false },
    { label: 'Refrigerante [2L]'  , selected: false },
    { label: 'Suco [1L]'          , selected: false },
    { label: 'Cerveja [lata]'     , selected: false },
    { label: 'Caipirinha [300 ml]', selected: false }
  ]);

  const toggleBebidasCheckbox = (index) => {
    const updatedBebidas = [...Bebidas];
    updatedBebidas[index].selected = !updatedBebidas[index].selected;
    setBebidas(updatedBebidas);
    onValueChange(updatedBebidas);
  };

  const [Acompanhamentos, setAcompanhamentos] = useState([
    { label: 'Pão de Alho'   , selected: false },
    { label: 'Queijo Coalho' , selected: false },
    { label: 'Farofa Pronta' , selected: false },
    { label: 'Pão Francês'   , selected: false },
    { label: 'Ovo de Codorna', selected: false },
    { label: 'Vinagrete'     , selected: false }
  ]);

  const toggleAcompanhamentosCheckbox = (index) => {
    const updatedAcompanhamentos = [...Acompanhamentos];
    updatedAcompanhamentos[index].selected = !updatedAcompanhamentos[index].selected;
    setAcompanhamentos(updatedAcompanhamentos);
    onValueChange(updatedAcompanhamentos);
  };

  const [Suprimentos, setSuprimentos] = useState([
    { label: 'Carvão'     , selected: false },
    { label: 'Copos'      , selected: false },
    { label: 'Guardanapos', selected: false },
    { label: 'Pratos'     , selected: false },
    { label: 'Talheres'   , selected: false }
  ]);

  const toggleSuprimentosCheckbox = (index) => {
    const updatedSuprimentos = [...Suprimentos];
    updatedSuprimentos[index].selected = !updatedSuprimentos[index].selected;
    setSuprimentos(updatedSuprimentos);
    onValueChange(updatedSuprimentos);
  };



  switch(type){
    case "Carnes Bovinas":
      return (
        <View style={styles.container}>
          <View style={styles.hr} />
          <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 10 }}>
            <Text style={[styles.text, { marginLeft: 20 }]}>{type}</Text>
          </View>
          <View>
            {cBovinas.map((item, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <BouncyCheckbox
                  size={30}
                  fillColor='#EF820D'
                  unfillColor="#000"
                  text={item.label.toString()}
                  isChecked={item.selected}
                  iconStyle={{ borderColor: "#EF820D", borderRadius: 1 }}
                  style={{ marginLeft: 20, marginVertical: 5 }}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 1 }}
                  textStyle={{ fontFamily: 'Karantina_400Regular', color: '#fff', fontSize: 20, textDecorationLine: "none" }}
                  onPress={() => toggleCBovinasCheckbox(index)}
                />
              </View>
            ))}
          </View>
        </View>
      );
      
    
    case "Carnes Suínas":
      return (
        <View style={styles.container}>
          <View style={styles.hr} />
          <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 10 }}>
            <Text style={[styles.text, { marginLeft: 20 }]}>{type}</Text>
          </View>
          <View>
            {cSuinas.map((item, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <BouncyCheckbox
                  size={30}
                  fillColor='#EF820D'
                  unfillColor="#000"
                  text={item.label.toString()}
                  isChecked={item.selected}
                  iconStyle={{ borderColor: "#EF820D", borderRadius: 1 }}
                  style={{ marginLeft: 20, marginVertical: 5 }}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 1 }}
                  textStyle={{ fontFamily: 'Karantina_400Regular', color: '#fff', fontSize: 20, textDecorationLine: "none" }}
                  onPress={() => toggleCSuinasCheckbox(index)}
                />
              </View>
            ))}
          </View>
        </View>
      );
    case "Carnes de Frango":
      return (
        <View style={[styles.container, {height: 250}]}>
          <View style={styles.hr} />
          <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 10 }}>
            <Text style={[styles.text, { marginLeft: 20 }]}>{type}</Text>
          </View>
          <View>
            {cFrango.map((item, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <BouncyCheckbox
                  size={30}
                  fillColor='#EF820D'
                  unfillColor="#000"
                  text={item.label.toString()}
                  isChecked={item.selected}
                  iconStyle={{ borderColor: "#EF820D", borderRadius: 1 }}
                  style={{ marginLeft: 20, marginVertical: 5 }}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 1 }}
                  textStyle={{ fontFamily: 'Karantina_400Regular', color: '#fff', fontSize: 20, textDecorationLine: "none" }}
                  onPress={() => toggleCFrangoCheckbox(index)}
                />
              </View>
            ))}
          </View>
        </View>
      );
    case "Bebidas":
      return (
        <View style={styles.container}>
          <View style={styles.hr} />
          <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 10 }}>
            <Text style={[styles.text, { marginLeft: 20 }]}>{type}</Text>
          </View>
          <View>
            {Bebidas.map((item, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <BouncyCheckbox
                  size={30}
                  fillColor='#EF820D'
                  unfillColor="#000"
                  text={item.label.toString()}
                  isChecked={item.selected}
                  iconStyle={{ borderColor: "#EF820D", borderRadius: 1 }}
                  style={{ marginLeft: 20, marginVertical: 5 }}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 1 }}
                  textStyle={{ fontFamily: 'Karantina_400Regular', color: '#fff', fontSize: 20, textDecorationLine: "none" }}
                  onPress={() => toggleBebidasCheckbox(index)}
                />
              </View>
            ))}
          </View>
        </View>
      );
    case "Acompanhamentos":
      return (
        <View style={[styles.container, {height: 350}]}>
          <View style={styles.hr} />
          <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 10 }}>
            <Text style={[styles.text, { marginLeft: 20 }]}>{type}</Text>
          </View>
          <View>
            {Acompanhamentos.map((item, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <BouncyCheckbox
                  size={30}
                  fillColor='#EF820D'
                  unfillColor="#000"
                  text={item.label.toString()}
                  isChecked={item.selected}
                  iconStyle={{ borderColor: "#EF820D", borderRadius: 1 }}
                  style={{ marginLeft: 20, marginVertical: 5 }}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 1 }}
                  textStyle={{ fontFamily: 'Karantina_400Regular', color: '#fff', fontSize: 20, textDecorationLine: "none" }}
                  onPress={() => toggleAcompanhamentosCheckbox(index)}
                />
              </View>
            ))}
          </View>
        </View>
      );
    case "Suprimentos":
      return (
        <View style={styles.container}>
          <View style={styles.hr} />
          <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 10 }}>
            <Text style={[styles.text, { marginLeft: 20 }]}>{type}</Text>
          </View>
          <View>
            {Suprimentos.map((item, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <BouncyCheckbox
                  size={30}
                  fillColor='#EF820D'
                  unfillColor="#000"
                  text={item.label.toString()}
                  isChecked={item.selected}
                  iconStyle={{ borderColor: "#EF820D", borderRadius: 1 }}
                  style={{ marginLeft: 20, marginVertical: 5 }}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 1 }}
                  textStyle={{ fontFamily: 'Karantina_400Regular', color: '#fff', fontSize: 20, textDecorationLine: "none" }}
                  onPress={() => toggleSuprimentosCheckbox(index)}
                />
              </View>
            ))}
          </View>
        </View>
      );
  }  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: 300,
    // justifyContent: 'center'
  },
  hr: {
    width: windowWidth,
    borderBottomWidth: 1,
    borderBottomColor: '#282D2D',
    marginTop: 5,
    marginBottom: 10
  },
  text: {
    fontFamily: 'Karantina_400Regular', 
    fontSize: 30, 
    color: '#fff',
  },

})