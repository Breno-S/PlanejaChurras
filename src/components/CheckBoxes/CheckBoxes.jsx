import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const windowWidth = Dimensions.get('window').width;

export default function CheckBoxes({type, onValueChange}){
  const navigation  = useNavigation();

  const [cBovinas, setcBovinas] = useState([ 
    {label:'Fraldinha' , value:'Fraldinha' , selected: false},
    {label:'Contrafilé', value:'Contrafilé', selected: false},
    {label:'Alcatra'   , value:'Alcatra'   , selected: false},
    {label:'Picanha'   , value:'Picanha'   , selected: false},
    {label:'Cupim'     , value:'Cupim'     , selected: false}
  ]);

  const toggleCBovinasCheckbox = (index) => {
    const updatedCBovinas = [...cBovinas];
    updatedCBovinas[index].selected = !updatedCBovinas[index].selected;
    setcBovinas(updatedCBovinas);
    onValueChange(updatedCBovinas);
  };

              
  const [cSuinas, setcSuinas] = useState([
    { label: 'Pernil'       , value: 'Pernil'       , selected: false },
    { label: 'Lombo'        , value: 'Lombo'        , selected: false },
    { label: 'Bisteca Suína', value: 'Bisteca Suína', selected: false },
    { label: 'Linguiça'     , value: 'Linguiça'     , selected: false },
    { label: 'Panceta'      , value: 'Panceta'      , selected: false }
  ]);

  const toggleCSuinasCheckbox = (index) => {
    const updatedCSuinas = [...cSuinas];
    updatedCSuinas[index].selected = !updatedCSuinas[index].selected;
    setcSuinas(updatedCSuinas);
    onValueChange(updatedCSuinas);
  };
  
  const [cFrango, setcFrango] = useState([
    { label: 'Coxa'   , value: 'Coxa'   , selected: false },
    { label: 'Asa'    , value: 'Asa'    , selected: false },
    { label: 'Coração', value: 'Coração', selected: false }
  ]);

  const toggleCFrangoCheckbox = (index) => {
    const updatedCFrango = [...cFrango];
    updatedCFrango[index].selected = !updatedCFrango[index].selected;
    setcFrango(updatedCFrango);
    onValueChange(updatedCFrango);
  };

  const [Bebidas, setBebidas] = useState([
    { label: 'Água'          , value: 'Água'                , alcoholic: false , selected: false },
    { label: 'Refrigerante'  , value: 'Refrigerante [2L]'   , alcoholic: false , selected: false },
    { label: 'Suco'          , value: 'Suco [1L]'           , alcoholic: false , selected: false },
    { label: 'Cerveja'       , value: 'Cerveja [lata 350mL]', alcoholic: true  , selected: false },
    { label: 'Caipirinha'    , value: 'Caipirinha [1L]'     , alcoholic: true  , selected: false }
  ]);

  const toggleBebidasCheckbox = (index) => {
    const updatedBebidas = [...Bebidas];
    updatedBebidas[index].selected = !updatedBebidas[index].selected;
    setBebidas(updatedBebidas);
    onValueChange(updatedBebidas);
  };

  const [Acompanhamentos, setAcompanhamentos] = useState([
    { label: 'Pão de Alho'   , value: 'Pão de Alho'                     , selected: false },
    { label: 'Queijo Coalho' , value: 'Queijo Coalho [pacote 7 espetos]', selected: false },
    { label: 'Farofa Pronta' , value: 'Farofa Pronta [500g]'            , selected: false },
    { label: 'Pão Francês'   , value: 'Pão Francês'                     , selected: false },
    { label: 'Arroz'         , value: 'Arroz [1kg]'                     , selected: false }
  ]);

  const toggleAcompanhamentosCheckbox = (index) => {
    const updatedAcompanhamentos = [...Acompanhamentos];
    updatedAcompanhamentos[index].selected = !updatedAcompanhamentos[index].selected;
    setAcompanhamentos(updatedAcompanhamentos);
    onValueChange(updatedAcompanhamentos);
  };

  const [Suprimentos, setSuprimentos] = useState([
    { label: 'Carvão'     , value: 'Carvão [1kg]'                               , selected: false },
    { label: 'Copos'      , value: 'Copos Descartáveis [kit 50 unid.]'           , selected: false },
    { label: 'Guardanapos', value: 'Guardanapos Descartáveis [kit 50 unid.]'     , selected: false },
    { label: 'Pratos'     , value: 'Pratos Descartáveis [kit 50 unid.]'          , selected: false },
    { label: 'Talheres'   , value: 'Talheres Descartáveis (garfo e faca) [kit 50 unid.]', selected: false }
  ]);

  const toggleSuprimentosCheckbox = (index) => {
    const updatedSuprimentos = [...Suprimentos];
    updatedSuprimentos[index].selected = !updatedSuprimentos[index].selected;
    setSuprimentos(updatedSuprimentos);
    onValueChange(updatedSuprimentos);
  };

   // Este useEffect será acionado quando a tela é montada e quando você volta para ela
   useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      // Reseta os estados quando a tela perde o foco (quando você sai dela)
      if (type === "Carnes Bovinas") {
        setcBovinas([
          { label: 'Fraldinha' , selected: false },
          { label: 'Contrafilé', selected: false },
          { label: 'Alcatra'   , selected: false },
          { label: 'Picanha'   , selected: false },
          { label: 'Cupim'     , selected: false }
        ]);
      } else if (type === "Carnes Suínas") {
        setcSuinas([
          { label: 'Pernil'       , selected: false },
          { label: 'Lombo'        , selected: false },
          { label: 'Bisteca Suína', selected: false },
          { label: 'Linguiça'     , selected: false },
          { label: 'Panceta'      , selected: false }
        ]);
      } else if (type === "Carnes de Frango") {
        setcFrango([
          { label: 'Coxa'   , selected: false },
          { label: 'Asa'    , selected: false },
          { label: 'Coração', selected: false }
        ]);
      } else if (type === "Bebidas") {
        setBebidas([
          { label: 'Água'        , selected: false }, 
          { label: 'Refrigerante', selected: false }, 
          { label: 'Suco'        , selected: false }, 
          { label: 'Cerveja'     , selected: false }, 
          { label: 'Caipirinha'  , selected: false } 
        ]);
      } else if (type === "Acompanhamentos") {
        setAcompanhamentos([
          { label: 'Pão de Alho'  , selected: false },
          { label: 'Queijo Coalho', selected: false },
          { label: 'Farofa Pronta', selected: false },
          { label: 'Pão Francês'  , selected: false },
          { label: 'Arroz'        , selected: false }
        ]);
      } else if (type === "Suprimentos") {
        setSuprimentos([
          { label: 'Carvão'     , selected: false },
          { label: 'Copos'      , selected: false },
          { label: 'Guardanapos', selected: false },
          { label: 'Pratos'     , selected: false },
          { label: 'Talheres'   , selected: false }
        ]);
      }
    });

    return unsubscribe;
  }, [navigation]);


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
        <View style={[styles.container, {height: 300}]}>
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