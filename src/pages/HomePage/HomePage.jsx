import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Karantina_400Regular } from '@expo-google-fonts/karantina';

export default function HomePage() {
// carrega a fonte karantina
  let [fontsLoaded, fontError] = useFonts({
    Karantina_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }       

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Karantina_400Regular', fontSize: 40 }}>Karantina_400Regular</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})


