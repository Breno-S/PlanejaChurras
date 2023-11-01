import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { useEffect, useState } from "react";

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
        </View>

        <View style={{flexDirection: 'column'}}>
          {/* Row */}
          {/* <View style={ {flexDirection: 'row', justifyContent: 'space-between'} }> */}

            {/* Parte Esquerda */}
            {/* <View style={ [styles.halfLeft] }>
              <Text style={ [globalStyles.text, styles.cardInfo] }>Quantidade Adultos: <Text style={ {color: '#EF820D'} }>{params.qtd_adultos}</Text></Text>
              <Text style={ [globalStyles.text, styles.cardInfo] }>Quantidade Jovens: <Text style={ {color: '#EF820D'} }>{params.qtd_jovens}</Text></Text>
              <Text style={ [globalStyles.text, styles.cardInfo] }>Quantidade Crianças: <Text style={ {color: '#EF820D'} }>{params.qtd_criancas}</Text></Text>
              <Text style={ [globalStyles.text, styles.cardInfo] }>Local: <Text style={ {color: '#EF820D'} }>{params.logradouro}, {params.numero}</Text></Text>
            </View> */}

            {/* Parte Direita */}
            {/* <View style={ [styles.halfRight] }>
              <Text style={ [globalStyles.text, styles.cardInfo] }>Preço Total: <Text style={ {color: '#EF820D'} }>R${params.preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, minimumFractionDigits: 2 })}</Text></Text>
              <Text style={ [globalStyles.text, styles.cardInfo] }>Preço por Pessoa: <Text style={ {color: '#EF820D'} }>R${params.preco_pessoa.toLocaleString('pt-BR', { minimumFractionDigits: 2, minimumFractionDigits: 2 })}</Text></Text>
            </View> */}

          {/* </View> */}

            { showDetails ? (
            <View style={ {flexDirection: 'row', justifyContent: 'space-between'} }>
              <View style={ [styles.halfLeft] }>
                <Text style={ [globalStyles.text, styles.cardInfo] }>Quantidade Adultos: <Text style={ {color: '#EF820D'} }>{params.qtd_adultos}</Text></Text>
                <Text style={ [globalStyles.text, styles.cardInfo] }>Quantidade Jovens: <Text style={ {color: '#EF820D'} }>{params.qtd_jovens}</Text></Text>
                <Text style={ [globalStyles.text, styles.cardInfo] }>Quantidade Crianças: <Text style={ {color: '#EF820D'} }>{params.qtd_criancas}</Text></Text>
                <Text style={ [globalStyles.text, styles.cardInfo] }>Local: <Text style={ {color: '#EF820D'} }>{params.logradouro}, {params.numero}</Text></Text>
              </View>
          
              {/* Parte Direita */}
              <View style={ [styles.halfRight] }>
                <Text style={ [globalStyles.text, styles.cardInfo] }>Preço Total: <Text style={ {color: '#EF820D'} }>R${params.preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, minimumFractionDigits: 2 })}</Text></Text>
                <Text style={ [globalStyles.text, styles.cardInfo] }>Preço por Pessoa: <Text style={ {color: '#EF820D'} }>R${params.preco_pessoa.toLocaleString('pt-BR', { minimumFractionDigits: 2, minimumFractionDigits: 2 })}</Text></Text>
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
    padding: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
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