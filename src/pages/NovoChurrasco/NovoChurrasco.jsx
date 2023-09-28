import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import SliderInput from '../../components/SliderInput/SliderInput';
import { globalStyles } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Icon_Edit = () => <Icon name="pencil-square-o" size={32} color="#fff" style={ {margin: 10} }/>;

const windowWidth = Dimensions.get('window').width;

export default function NovoChurrasco(){

    
    
  return(
    
    <View style={styles.container}>
      <View style={ {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'} }>
        <TextInput style={ [globalStyles.text, styles.title] }>Nome do Churrasco </TextInput>
          <TouchableOpacity onPress={null}>
            <Icon_Edit />
          </TouchableOpacity>
      </View>
      
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
    marginTop: 20,
    width: windowWidth-(windowWidth/5),
  }

})