import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/AntDesign';

const Icon_open = () => <Icon name="down" size={30} color="#EF820D" />
const Icon_close = () => <Icon name="up" size={30} color="#EF820D" />

export default function CardChurras( { params } ) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prevState) => !prevState);
  }

  useEffect(() => {
    setShowDetails(false);
  }, []);

  console.log("Card params", params);
  return (
    <TouchableOpacity onPress={toggleDetails}>
      <View style={styles.card}>

        {/* Titulo do card */}
        <View style={ [styles.viewTitle] }>
          <Text style={ [styles.title, globalStyles.text] }>{params.nome_churras}</Text>
          {showDetails ? <Icon_close />: <Icon_open />}
        </View>

        <View style={{flexDirection: 'column'}}>
          { showDetails ? (
          <View style={ {flexDirection: 'row', justifyContent: 'space-between'} }>
            <View style={ [styles.halfLeft] }>
              <Text style={ [globalStyles.text, styles.cardInfo] }>Quantidade Adultos: <Text style={ {color: '#EF820D'} }>{params.qtd_adultos}</Text></Text>
              <Text style={ [globalStyles.text, styles.cardInfo] }>Quantidade Jovens: <Text style={ {color: '#EF820D'} }>{params.qtd_jovens}</Text></Text>
              <Text style={ [globalStyles.text, styles.cardInfo] }>Quantidade Crianças: <Text style={ {color: '#EF820D'} }>{params.qtd_criancas}</Text></Text>
              <Text style={ [globalStyles.text, styles.cardInfo] }>Local: <Text style={ {color: '#EF820D'} }>{params.logradouro}{params.numero ? ", " + params.numero : ""}</Text></Text>
            </View>
        
            {/* Parte Direita */}
            <View style={ [styles.halfRight] }>
              <Text style={ [globalStyles.text, styles.cardInfo] }>Preço Total: <Text style={ {color: '#EF820D'} }>R${params.preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text></Text>
              <Text style={ [globalStyles.text, styles.cardInfo] }>Preço por Pessoa: <Text style={ {color: '#EF820D'} }>R${params.preco_pessoa.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text></Text>
            </View>
          </View>
          ) : null }
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    alignItems: 'center'
  },

  halfRight: {
    padding: 10,
    width: '50%',
  },

  halfLeft: {
    padding: 10,
    width: '50%',
  },

  title: {
    fontSize: 24,
    alignSelf: 'center',
  },

  cardInfo: {
    fontSize: 18,
  }
});