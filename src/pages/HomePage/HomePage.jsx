import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardChurras from '../../components/CardChurras/CardChurras';
import { globalStyles } from '../../styles/globalStyles';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomePage( { navigation } ) {
  return (
    // View Principal
    <ScrollView style={styles.container}>

      {/* Titulo */}
      <Text style={ [globalStyles.text, styles.title] }>HISTÓRICO DE CHURRAS</Text>

      {/* Cards */}
      <View style={ {gap: 20, paddingBottom: 32 , borderBottomColor: '#191B1B', borderBottomWidth: 1} }>
        <CardChurras />
        <CardChurras />
        <CardChurras />
        <CardChurras />
      </View>

      {/* Botão Novo Churrasco */}
      
      <TouchableOpacity style={ styles.newButton} onPress={() => navigation.navigate("NovoChurras")}>
        <Text style={ {fontFamily: 'Graduate_400Regular', color: '#fff', textAlign: 'center'} }>Criar{'\n'}Churras</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000',
  },

  title: {
    fontSize: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    margin: 20,
    alignSelf: 'center',
  },

  newButton: {
    margin: 32,
    alignSelf: 'center',
    backgroundColor: '#EF820D',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 30,
    elevation: 2,
  },
})


