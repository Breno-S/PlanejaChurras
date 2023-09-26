import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import hamburguerButton from '../../../assets/images/MenuHamburguer.png'

const ButtonCardapio = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <TouchableOpacity onPress={openDrawer} style={{padding:10}}>
      <Image
        source={hamburguerButton}
        style={{ marginHorizontal: 10, width: 36, height: 36 }}
      />
    </TouchableOpacity>
  );
};


export default ButtonCardapio;