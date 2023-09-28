import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export default function CardChurras(params) {
  return (
    <TouchableOpacity onPress={null}>
      <View style={styles.card}>

        {/* Titulo do card */}
        <View style={ [styles.viewTitle] }>
          <Text style={ [styles.title, globalStyles.text] }>Nome do Churras</Text>
        </View>

        {/* Row */}
        <View style={ {flexDirection: 'row',} }>

          {/* Parte Esquerda */}
          <View style={ [styles.halfLeft] }>
            <Text style={ [globalStyles.text, styles.cardInfo] }>Quantidade Adultos: <Text style={ {color: '#EF820D'} }>50</Text></Text>
            <Text style={ [globalStyles.text, styles.cardInfo] }>Quantidade Jovens: <Text style={ {color: '#EF820D'} }>25</Text></Text>
            <Text style={ [globalStyles.text, styles.cardInfo] }>Quantidade Crianças: <Text style={ {color: '#EF820D'} }>5</Text></Text>
            <Text style={ [globalStyles.text, styles.cardInfo] }>Local: <Text style={ {color: '#EF820D'} }>Onde Judas Morreu</Text></Text>
          </View>
      
          {/* Parte Direita */}
          <View style={ [styles.halfRight] }>
            <Text style={ [globalStyles.text, styles.cardInfo] }>Preço Total: <Text style={ {color: '#EF820D'} }>R$1000,00</Text></Text>
            <Text style={ [globalStyles.text, styles.cardInfo] }>Preço por Pessoa: <Text style={ {color: '#EF820D'} }>R$50,00</Text></Text>
          </View>

        </View>
        
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#191B1B',
    borderRadius: 5,
    elevation: 1,
  },

  viewTitle: {
    padding: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },

  halfRight: {
    padding: 10,
  },

  halfLeft: {
    padding: 10,
  },

  title: {
    fontSize: 24,
    alignSelf: 'center',
  },

  cardInfo: {
    fontSize: 18,
  }
});