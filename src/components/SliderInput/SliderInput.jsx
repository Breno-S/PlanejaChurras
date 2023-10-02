import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import { useFonts, Karantina_400Regular } from '@expo-google-fonts/karantina';
import Slider from '@react-native-community/slider';

const windowWidth = Dimensions.get('window').width;

export default function SliderInput({type}){
  
  
  const [sliderValue, setSliderValue] = useState(0);

      
      return(
    
        <View style={styles.container}>
            <View style={styles.hr}/>
            <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
                <Text style={[styles.text, {marginLeft: 20}]}>{type}</Text>    
                <Text style={[styles.text, {marginLeft: 310}]}>{sliderValue}</Text>    
            </View>
            <View style={styles.sliderBody}>
                <Slider minimumValue={0}
                        maximumValue={50}
                        value={sliderValue}
                        onValueChange={(value) => setSliderValue(value)}
                        step={1}
                        minimumTrackTintColor='#EF820D'
                        maximumTrackTintColor='#000'
                        style={styles.slider}
                        />
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
  sliderBody: {
    height: 50,
    borderRadius: 40,
    backgroundColor: '#282D2D',
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  slider: {
    backgroundColor: '#282D2D',
    marginHorizontal: 2,
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