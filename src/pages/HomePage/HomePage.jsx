import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CardChurras from '../../components/CardChurras/CardChurras';
import db from '../../database';

const Icon_novo = () => <Icon name='plus' size={30} color={'#fff'} />;

export default function HomePage( { navigation } ) {
  const [allChurras, setAllChurras] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Exemplo de consulta calculando o preço do churrasco além de retornar todos os dados usados nos cards
    db.transaction(tx => {
      tx.executeSql(
        "SELECT Churras.pk_churras, Churras.nome_churras, Churras.qtd_adultos, Churras.qtd_jovens, Churras.qtd_criancas, Local_Churras.logradouro, Local_Churras.numero, SUM(Produto.preco_unitario * Item_Churras.quantidade) AS preco_total, SUM(Produto.preco_unitario * Item_Churras.quantidade)/(qtd_adultos) AS preco_pessoa FROM Churras INNER JOIN Local_Churras ON Local_Churras.fk_churras = Churras.pk_churras INNER JOIN Item_Churras ON Item_Churras.fk_churras = Churras.pk_churras INNER JOIN Produto ON Item_Churras.fk_produto = Produto.pk_produto WHERE qtd_adultos <> 0 GROUP BY Churras.pk_churras",
        [],
        (_, resultSet) => {
          console.log("INNER JOIN funcionou", resultSet.rows._array);
          setAllChurras(resultSet.rows._array);
          setIsLoading(false);
        },
        (_, error) => console.error("Erro no INNER JOIN", error)
      )
    });

    // Exemplo de consulta obtendo os produtos do churrasco
    db.transaction(tx => {
      tx.executeSql("SELECT Churras.pk_churras, Produto.nome_produto FROM Produto INNER JOIN Item_Churras ON Item_Churras.fk_produto = Produto.pk_produto INNER JOIN Churras on Item_Churras.fk_churras = Churras.pk_churras",
        [],
        (_, resultSet) => {
          // console.log("INNER JOIN funcionou", resultSet.rows._array);
        },
        (_, error) => console.error("Erro no SELECT em 'Churras'", error)
      )
    });

    setIsLoading(false);
    
  }, []);

  if(isLoading) {
    return(
      <View style={[styles.container, {justifyContent: 'center'}]}>
        <Text style={ [globalStyles.text, {alignSelf: 'center'}]  }>CARREGANDO</Text>
      </View>
    )
  }

  return (
    // View Principal
    <View style={styles.container}>

      {/* Titulo */}
      <Text style={ [globalStyles.text, styles.title] }>HISTÓRICO DE CHURRAS</Text>
      
      <ScrollView style={{marginBottom: 120, borderRadius: 100}}>
        {/* Main */}
        <View style={ {gap: 20} }>
        
          {/* Mapeamento dos Cards */}
          {allChurras.map(churras => (
            <CardChurras key={churras.pk_churras} params={churras} />
          ))}
        
        </View>
      </ScrollView>

      {/* Botão Novo Churrasco */}
        <TouchableOpacity style={ styles.newButton} onPress={() => navigation.navigate("NovoChurras")}>
          <Text style={ {fontFamily: 'Graduate_400Regular', color: '#fff', textAlign: 'center'} }><Icon_novo/></Text>
        </TouchableOpacity>

    </View>
    

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
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EF820D',
    padding: 10,
    position: 'absolute',
    bottom: 40,
    right: 40,
    zIndex: 2,
    elevation: 2,
  },
})


