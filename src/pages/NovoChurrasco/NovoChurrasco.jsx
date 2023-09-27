import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import { useFonts, Karantina_400Regular } from '@expo-google-fonts/karantina';
import { TextInput } from 'react-native-gesture-handler';
import SliderInput from '../../components/SliderInput/SliderInput';

export default function NovoChurrasco(){

    
    
  return(
    
    <View style={styles.container}>
      <TextInput style={styles.title}>Nome do Churrasco</TextInput>
      
      <SliderInput />
      <SliderInput />
      <SliderInput />
      


                    
    </View>

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
    marginTop: 20
  }

})