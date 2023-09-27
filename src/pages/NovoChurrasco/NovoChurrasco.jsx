import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import { useFonts, Karantina_400Regular } from '@expo-google-fonts/karantina';
import Slider from '@react-native-community/slider';

export default function NovoChurrasco(){

    
    
  return(

    <View style={styles.container}>
      <Text style={{ fontFamily: 'Karantina_400Regular', fontSize: 30, color: '#fff' }}>Nome do Churrasco</Text>
      <Slider minimumValue={0}
              maximumValue={50}
              step={1}
              minimumTrackTintColor='#EF820D'
              maximumTrackTintColor='#000'
              style={styles.slider}
              />


                    
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
    
  }

})