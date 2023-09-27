import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import { useFonts, Karantina_400Regular } from '@expo-google-fonts/karantina';

const windowWidth = Dimensions.get('window').width;

export default function CheckBoxes(){
  
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

    
    
  return(

    <View style={styles.container}>
        <View style={styles.hr}/>
        <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
            <Text style={[styles.text, {marginLeft: 20}]}>Tipo</Text>    
        </View>
        <View>
            
        </View>


                    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: 150,
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
  }

})