import { StyleSheet, Text, View } from 'react-native';
import CardChurras from '../../components/CardChurras/CardChurras';

export default function HomePage() {
  return (
    <View style={styles.container}>
      {/* Title */}
        <Text style={
        {
          fontFamily: 'Karantina_400Regular',
          fontSize: 40, color: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#fff',
          letterSpacing: 1,
          margin: 10,
        }
        }
        >HISTÓRICO DE CHURRAS</Text>

        {/* Cards */}
        <CardChurras />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
})


