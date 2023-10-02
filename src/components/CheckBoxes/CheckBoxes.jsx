import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import { useFonts, Karantina_400Regular } from '@expo-google-fonts/karantina';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const windowWidth = Dimensions.get('window').width;

export default function CheckBoxes({type}){
  
  cBovinas = ['Fraldinha [kg] ',
              'Contrafilé [kg]',
              'Alcatra [kg]',
              'Costela [kg]',
              'Picanha [kg]']
              
  cSuinas = [ 'Pernil [kg]',
              'Lombo [kg]',
              'Bisteca [kg]',
              'Linguiça [kg]',
              'Maminha [kg]']
              
  cFrango = ['Coxa [kg]',
              'Sobrecoxa [kg]',
              'Asa [kg]',
              'Coração [kg]']

  Bebidas = [ 'Água [2L]',
              'Refrigerante [2L]',
              'Suco [2L]',
              'Cerveja [lata]',
              'Caipirinha [300 ml]']

  Acompanhamentos = ['Pão de Alho',
                     'Queijo Coalho',
                     'Farofa Pronta',
                     'Pão',
                     'Vinagrete']

  Suprimentos = ['Carvão',
                 'Copos',
                 'Guardanapos',
                 'Pratos',
                 'Talheres']

  const [checkboxState, setCheckboxState] = useState(false);

  switch(type){
    case "Carnes Bovinas":
      return(
        <View style={styles.container}>
            <View style={styles.hr}/>
            <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
                <Text style={[styles.text, {marginLeft: 20}]}>{type}</Text>    
            </View>
            <View>
              {cBovinas.map((item, index) => (
                <BouncyCheckbox
                  key = {index}
                  size={30}
                  fillColor='#EF820D'
                  unfillColor="#000"
                  text={item}
                  iconStyle={{ borderColor: "#EF820D", borderRadius: 1 }}
                  style={{marginLeft: 20, marginVertical: 5}}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 1 }}
                  textStyle={{ fontFamily: 'Karantina_400Regular', color: '#fff', fontSize: 20  }}
                  onPress={() => setCheckboxState(!checkboxState)}
                />
                
              ))} 
            </View>        
        </View>   
      );
    
    case "Carnes Suínas":
      return(   
        <View style={styles.container}>
            <View style={styles.hr}/>
            <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
                <Text style={[styles.text, {marginLeft: 20}]}>{type}</Text>    
            </View>
            <View>
              {cSuinas.map((item, index) => (
                <BouncyCheckbox
                  key = {index}
                  size={30}
                  fillColor='#EF820D'
                  unfillColor="#000"
                  text={item}
                  iconStyle={{ borderColor: "#EF820D", borderRadius: 1 }}
                  style={{marginLeft: 20, marginVertical: 5}}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 1 }}
                  textStyle={{ fontFamily: 'Karantina_400Regular', color: '#fff', fontSize: 20  }}
                  onPress={() => setCheckboxState(!checkboxState)}
                />
                
              ))} 
            </View>       
        </View>
      );
    case "Carnes de Frango":
      return(
        <View style={styles.container}>
            <View style={styles.hr}/>
            <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
                <Text style={[styles.text, {marginLeft: 20}]}>{type}</Text>    
            </View>
            <View>
              {cFrango.map((item, index) => (
                <BouncyCheckbox
                  key = {index}
                  size={30}
                  fillColor='#EF820D'
                  unfillColor="#000"
                  text={item}
                  iconStyle={{ borderColor: "#EF820D", borderRadius: 1 }}
                  style={{marginLeft: 20, marginVertical: 5}}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 1 }}
                  textStyle={{ fontFamily: 'Karantina_400Regular', color: '#fff', fontSize: 20  }}
                  onPress={() => setCheckboxState(!checkboxState)}
                />
                
              ))} 
            </View>       
        </View>
      );
    case "Bebidas":
      return(
        <View style={styles.container}>
            <View style={styles.hr}/>
            <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
                <Text style={[styles.text, {marginLeft: 20}]}>{type}</Text>    
            </View>
            <View>
              {Bebidas.map((item, index) => (
                <BouncyCheckbox
                  key = {index}
                  size={30}
                  fillColor='#EF820D'
                  unfillColor="#000"
                  text={item}
                  iconStyle={{ borderColor: "#EF820D", borderRadius: 1 }}
                  style={{marginLeft: 20, marginVertical: 5}}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 1 }}
                  textStyle={{ fontFamily: 'Karantina_400Regular', color: '#fff', fontSize: 20  }}
                  onPress={() => setCheckboxState(!checkboxState)}
                />
                
              ))} 
            </View>        
        </View>   
      );
    case "Acompanhamentos":
      return(
        <View style={styles.container}>
            <View style={styles.hr}/>
            <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
                <Text style={[styles.text, {marginLeft: 20}]}>{type}</Text>    
            </View>
            <View>
              {Acompanhamentos.map((item, index) => (
                <BouncyCheckbox
                  key = {index}
                  size={30}
                  fillColor='#EF820D'
                  unfillColor="#000"
                  text={item}
                  iconStyle={{ borderColor: "#EF820D", borderRadius: 1 }}
                  style={{marginLeft: 20, marginVertical: 5}}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 1 }}
                  textStyle={{ fontFamily: 'Karantina_400Regular', color: '#fff', fontSize: 20  }}
                  onPress={() => setCheckboxState(!checkboxState)}
                />
                
              ))} 
            </View>        
        </View>   
      );

    case "Suprimentos":
      return(
        <View style={styles.container}>
            <View style={styles.hr}/>
            <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
                <Text style={[styles.text, {marginLeft: 20}]}>{type}</Text>    
            </View>
            <View>
              {Suprimentos.map((item, index) => (
                <BouncyCheckbox
                  key = {index}
                  size={30}
                  fillColor='#EF820D'
                  unfillColor="#000"
                  text={item}
                  iconStyle={{ borderColor: "#EF820D", borderRadius: 1 }}
                  style={{marginLeft: 20, marginVertical: 5}}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 1 }}
                  textStyle={{ fontFamily: 'Karantina_400Regular', color: '#fff', fontSize: 20  }}
                  onPress={() => setCheckboxState(!checkboxState)}
                />
                
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
  listText: {
    fontFamily: 'Karantina_400Regular', 
    fontSize: 20, 
    color: '#fff',
    marginLeft: 20
  }

})