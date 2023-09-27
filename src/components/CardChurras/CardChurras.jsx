import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../pages/styles/globalStyles";

export default function CardChurras(params) {
  return (
    <View style={styles.card}>

      {/* Titulo do card */}
      <View style={ [styles.viewTitle] }>
        <Text style={ [styles.title, globalStyles.text] }>Nome do Churras</Text>
      </View>

      {/* Row */}
      <View style={ {flexDirection: 'row'}}>

        {/* Parte Esquerda */}
        <View style={ [styles.viewLeft] }>
          <Text style={[globalStyles.text]}>Quantidade Adultos: 50</Text>
          <Text style={[globalStyles.text]}>Quantidade Jovens: 25</Text>
          <Text style={[globalStyles.text]}>Quantidade Crianças: 5</Text>
          <Text style={[globalStyles.text]}>Local: Onde Judas Morreu</Text>
        </View>
        
        {/* Parte Direita */}
        <View style={ [styles.viewRight] }>
          <Text style={[globalStyles.text]}>Preço Total: R$1000,00</Text>
          <Text style={[globalStyles.text]}>Preço por Pessoa: R$50,00</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '95%',
    backgroundColor: '#191B1B',
  },

  viewTitle: {
    padding: 10,
  },

  viewRight: {
    padding: 10,
  },

  viewLeft: {
    padding: 10,
  },

  title: {
    fontSize: 24,
    alignSelf: 'center'

  },
});