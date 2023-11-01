import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';

import CardChurras from '../../components/CardChurras/CardChurras';
import db from '../../database';

export default function HomePage( { navigation } ) {
  const [allChurras, setAllChurras] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dummyData1 = {
    nome_churras: "Churras Teste",
    qtd_adultos: 10,
    qtd_jovens: 100,
    qtd_criancas: 1000,
  }

  useEffect(() => {
    // Exemplo de consulta calculando o preço do churrasco além de retornar todos os dados usados nos cards
    db.transaction(tx => {
      tx.executeSql(
        "SELECT Churras.pk_churras, Churras.nome_churras, Churras.qtd_adultos, Churras.qtd_jovens, Churras.qtd_criancas, Local_Churras.logradouro, Local_Churras.numero, SUM(Produto.preco_unitario * Item_Churras.quantidade) AS preco_total, SUM(Produto.preco_unitario * Item_Churras.quantidade)/(qtd_adultos) AS preco_pessoa FROM Churras INNER JOIN Local_Churras ON Local_Churras.fk_churras = Churras.pk_churras INNER JOIN Item_Churras ON Item_Churras.fk_churras = Churras.pk_churras INNER JOIN Produto ON Item_Churras.fk_produto = Produto.pk_produto GROUP BY Churras.pk_churras",
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
    <ScrollView style={styles.container}>

      {/* Titulo */}
      <Text style={ [globalStyles.text, styles.title] }>HISTÓRICO DE CHURRAS</Text>

      {/* Main */}
      <View style={ {gap: 20, paddingBottom: 32 , borderBottomColor: '#191B1B', borderBottomWidth: 1} }>
        
        {/* Mapeamento dos Cards */}
        {allChurras.map(churras => (
          <CardChurras key={churras.pk_churras} params={churras} />
        ))}
        
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


