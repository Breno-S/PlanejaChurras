import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import { useFonts, Karantina_400Regular } from '@expo-google-fonts/karantina';

export default function Receitas({ }) {
  const windowWidth = Dimensions.get('window').width;
  const [selectedMenu, setSelectedMenu] = useState('BOVINAS'); // Defina o valor inicial como 'BOVINAS'

  const isBovinasSelected = selectedMenu === 'BOVINAS';
  const isSuinasSelected = selectedMenu === 'SUINAS';
  const isFrangoSelected = selectedMenu === 'FRANGO';

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>RECEITAS</Text>
        <View style={styles.underline}></View>
        <View style={[styles.underlineGray, { width: windowWidth }]}></View>

        <View style={styles.content}>
          <View style={[styles.list, { width: windowWidth }]}>
            <TouchableOpacity
              onPress={() => setSelectedMenu('BOVINAS')}
              style={[
                styles.menuItem,
                { flex: 1, alignItems: 'center' },
                isBovinasSelected && styles.selectedButton,
              ]}
            >
              <Text
                style={[
                  styles.textButton,
                  isBovinasSelected && styles.selectedButtonText,
                ]}
              >
                BOVINAS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedMenu('SUINAS')}
              style={[
                styles.menuItem,
                { flex: 1, alignItems: 'center' },
                isSuinasSelected && styles.selectedButton,
              ]}
            >
              <Text
                style={[
                  styles.textButton,
                  isSuinasSelected && styles.selectedButtonText,
                ]}
              >
                SUINAS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedMenu('FRANGO')}
              style={[
                styles.menuItem,
                { flex: 1, alignItems: 'center' },
                isFrangoSelected && styles.selectedButton,
              ]}
            >
              <Text
                style={[
                  styles.textButton,
                  isFrangoSelected && styles.selectedButtonText,
                ]}
              >
                FRANGO
              </Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.menuContent}>
          {selectedMenu === 'BOVINAS' && (
            <View>
              <View style={[styles.menuView, { width: windowWidth * 0.9 }]}>
                <Text style={styles.menuTitle}>Bife Acebolado</Text>
                <Image
                  source={require('../../../assets/images/bife-acebolado.jpg')}
                  style={styles.menuImage}
                />
                <Text style={styles.menuSubtitle}>Ingredientes: </Text>
                <Text style={styles.menuText}>• 500 gramas de contrafilé</Text>
                <Text style={styles.menuText}>• 2 colheres (sopa) manteiga</Text>
                <Text style={styles.menuText}>• 1 colher (sopa) de vinagre</Text>
                <Text style={styles.menuText}>• 1/2 colher (sopa) ou a gosto de tempero  pronto para carne</Text>
                <Text style={styles.menuText}>• 2 cebolas cortadas em rodelas</Text>

                <Text style={styles.menuSubtitle}>Modo de preparo: </Text>
                <Text style={styles.menuText}>• Tempere os bifes e reserve.</Text>
                <Text style={styles.menuText}>• Em uma frigideira grande, derreta a manteiga e coloque os bifes lado a lado na frigideira, em fogo alto.</Text>
                <Text style={styles.menuText}>• Em seguida, vire-os para que dourem dos dois lados.</Text>
                <Text style={styles.menuText}>• Prossiga a fritura até os bifes ficarem no ponto desejado.</Text>
                <Text style={styles.menuText}>• Reserve-os, mantendo-os aquecidos.</Text>
                <Text style={styles.menuText}>• Na mesma frigideira, junte a cebola e o vinagre e refogue bem até que as cebolas murchem.</Text>
                <Text style={styles.menuText}>• Despeje esta mistura sobre os bifes e sirva a seguir.</Text>
              </View>
              <View style={[styles.menuView, { width: windowWidth * 0.9 }]}>
                <Text style={styles.menuTitle}>Picanha Invertida</Text>
                <Image
                  source={require('../../../assets/images/picanha-invertida.webp')}
                  style={styles.menuImage}
                />
                <Text style={styles.menuSubtitle}>Ingredientes: </Text>
                <Text style={styles.menuText}>• 1 picanha de cerca de 1,5 kg</Text>
                <Text style={styles.menuText}>• 100 g de bacon</Text>
                <Text style={styles.menuText}>• Sal grosso</Text>
                <Text style={styles.menuText}>• 400 g de provolone</Text>
                <Text style={styles.menuText}>• Orégano</Text>

                <Text style={styles.menuSubtitle}>Modo de preparo: </Text>
                <Text style={styles.menuText}>• Fure a picanha no sentido diagonal, deixando 1,5 cm nas laterais.</Text>
                <Text style={styles.menuText}>• Vire a ponta para dentro, deixando no avesso, cuidado no corte para não atravessar as laterais de um lado ao outro.</Text>
                <Text style={styles.menuText}>• Recheie com o provolone picado temperado com orégano e o bacon, também picado.</Text>
                <Text style={styles.menuText}>• Feche as aberturas com palitos.</Text>
                <Text style={styles.menuText}>• Salgue com o sal grosso.</Text>
                <Text style={styles.menuText}>• Coloque no forno a 200ºC em uma assadeira untada ou se preferir leve para churrasqueira.</Text>
                <Text style={styles.menuText}>• Deixe assar a seu gosto, virando de 15 em 15 minutos.</Text>
              </View>
              <View style={[styles.menuView, { width: windowWidth * 0.9 }]}>
                <Text style={styles.menuTitle}>Cumpim Macio</Text>
                <Image
                  source={require('../../../assets/images/cupim-macio.webp')}
                  style={styles.menuImage}
                />
                <Text style={styles.menuSubtitle}>Ingredientes: </Text>
                <Text style={styles.menuText}>• 1 peça de cupim de mais ou menos 2 kg</Text>
                <Text style={styles.menuText}>• 3 colheres (sopa) de cebola picadinha</Text>
                <Text style={styles.menuText}>• 3 cubos de caldo de carne</Text>
                <Text style={styles.menuText}>• 1 colher (sopa) de óleo</Text>
                <Text style={styles.menuText}>• 2 colheres (sopa) de alho picado</Text>
                <Text style={styles.menuText}>• 3 colheres (sopa) de molho inglês</Text>
                <Text style={styles.menuText}>• Sal a gosto (recomendo 1 colher de sobremesa)</Text>
                <Text style={styles.menuText}>• Pimenta do reino a gosto</Text>

                <Text style={styles.menuSubtitle}>Modo de preparo: </Text>
                <Text style={styles.menuText}>• Lave bem a peça de cupim e faça uns furos com uma faca.</Text>
                <Text style={styles.menuText}>• Na panela de pressão, coloque o óleo, a cebola picada e o alho.</Text>
                <Text style={styles.menuText}>• Deixe dar uma fritadinha leve.</Text>
                <Text style={styles.menuText}>• Coloque 2 copos de água e acrescente os cubos sabor carne, dissolva-os.</Text>
                <Text style={styles.menuText}>• Coloque a peça de cupim inteira, deixe por 1 minuto e vire a peça.</Text>
                <Text style={styles.menuText}>• Em seguida, coloque água uns 4 dedos acima do cupim.</Text>
                <Text style={styles.menuText}>• Tampe a panela de pressão e deixe por 1 hora e 50 minutos, para que ela fique bem macia.</Text>
                <Text style={styles.menuText}>• Após esse tempo, retire a peça de cupim e a coloque em um refratário untado com óleo.</Text>
                <Text style={styles.menuText}>• Por cima dela jogue a pimenta-do-reino e o molho inglês.</Text>
                <Text style={styles.menuText}>• Coloque no forno pré-aquecido por 30 minutos.</Text>
                <Text style={styles.menuText}>• Batatas assadas são um bom acompanhamento para esse prato.</Text>
              </View>
            </View>
          )}

          {selectedMenu === 'SUINAS' && (
            <View>
              <View style={[styles.menuView, { width: windowWidth * 0.9 }]}>
                <Text style={styles.menuTitle}>Lombo ao molho de Maracujá</Text>
                <Image
                  source={require('../../../assets/images/lombo.jpg')}
                  style={styles.menuImage}
                />
                <Text style={styles.menuSubtitle}>Ingredientes: </Text>
                <Text style={styles.menuText}>• 2 kg de lombo magro</Text>
                <Text style={styles.menuText}>• 1 litro de água filtrada</Text>
                <Text style={styles.menuText}>• 1 cebola grande</Text>
                <Text style={styles.menuText}>• 1 garrafa de suco concentrado de maracujá</Text>
                <Text style={styles.menuText}>• 2 xícaras de açucar cristal</Text>
                <Text style={styles.menuText}>• 1 colher de sopa de manteiga</Text>
                <Text style={styles.menuText}>• Sal</Text>

                <Text style={styles.menuSubtitle}>Modo de preparo: </Text>
                <Text style={styles.menuText}>• Em um jarro misture a água filtrada, com o suco maguary de maracujá e o açúcar cristal e reserve.</Text>
                <Text style={styles.menuText}>• Pegue o lombo, retire o excesso de gordura e deixe-o de molho em água filtrada por 10 minutos.</Text>
                <Text style={styles.menuText}>• Escorrer a água, furar o lombo com uma faca de ponta e tempera-lo apenas com sal.</Text>
                <Text style={styles.menuText}>• Na panela de pedra, coloque a manteiga e a cebola picada em tiras.</Text>
                <Text style={styles.menuText}>• Frite-as até que fique "queimada nas beiradas".</Text>
                <Text style={styles.menuText}>• Coloque o lombo e pingue o suco de maracujá aos poucos até que ele fique cozido. Assim que estiver cozido deixe o suco secar e virar um caldo grosso. Sirva com farofa e arroz.</Text>
              </View>
              <View style={[styles.menuView, { width: windowWidth * 0.9 }]}>
                <Text style={styles.menuTitle}>Pernil à Pururuca</Text>
                <Image
                  source={require('../../../assets/images/pernil.jpg')}
                  style={styles.menuImage}
                />
                <Text style={styles.menuSubtitle}>Ingredientes: </Text>
                <Text style={styles.menuText}>• 1 pernil com o couro</Text>
                <Text style={styles.menuText}>• 1 cabeça de alho</Text>
                <Text style={styles.menuText}>• 1 colher de sopa rasa de sal, para cada quilo de pernil</Text>
                <Text style={styles.menuText}>• 3 copos de vinagre</Text>
                <Text style={styles.menuText}>• 1 cebola</Text>
                <Text style={styles.menuText}>• 1 copo de óleo</Text>
                <Text style={styles.menuText}>• 2 limões</Text>
                <Text style={styles.menuText}>• Pimenta do reino a gosto</Text>

                <Text style={styles.menuSubtitle}>Modo de preparo: </Text>
                <Text style={styles.menuText}>• Bater no liquidificador: cebola, alho, vinagre, suco dos limões, sal e pimenta.</Text>
                <Text style={styles.menuText}>• Coar em um pano ( utilizo um pano de prato limpo ).</Text>
                <Text style={styles.menuText}>• Colocar o líquido em uma seringa grande e injetar no pernil.</Text>
                <Text style={styles.menuText}>• A parte pastosa deste tempero, passar sobre o pernil, em especial, na parte da carne.</Text>
                <Text style={styles.menuText}>• Deixar neste tempero por 48 h.</Text>
                <Text style={styles.menuText}>• Levar ao forno para assar, com a parte do couro para cima, coberto com papel alumínio ( 1 hora para cada k de carne), em fogo médio.</Text>
                <Text style={styles.menuText}>• 1 hora antes de retirar do forno, retirar o papel alumínio, deixe em fogo alto, para dourar.</Text>
                <Text style={styles.menuText}>• Depois de dourado, jogar o óleo fervendo sobre o couro.</Text>
              </View>
              <View style={[styles.menuView, { width: windowWidth * 0.9 }]}>
                <Text style={styles.menuTitle}>Bisteca ao Forno</Text>
                <Image
                  source={require('../../../assets/images/bisteca.jpg')}
                  style={styles.menuImage}
                />
                <Text style={styles.menuSubtitle}>Ingredientes: </Text>
                <Text style={styles.menuText}>• 8 bistecas de porco</Text>
                <Text style={styles.menuText}>• 1 colher sopa de mostarda</Text>
                <Text style={styles.menuText}>• 1 colher chá de tempero baiano</Text>
                <Text style={styles.menuText}>• 100 ml de azeite</Text>
                <Text style={styles.menuText}>• 2 dentes de alho amassado</Text>
                <Text style={styles.menuText}>• 1 colher de chá de colorau</Text>
                <Text style={styles.menuText}>• 100 ml de vinho branco</Text>
                <Text style={styles.menuText}>• 100 ml suco de laranja ou abacaxi</Text>
                <Text style={styles.menuText}>• Sal a gosto</Text>

                <Text style={styles.menuSubtitle}>Modo de preparo: </Text>
                <Text style={styles.menuText}>• Limpe as bistecas.</Text>
                <Text style={styles.menuText}>• Depois tempere com sal e alho coloque em um tabuleiro e reserve.</Text>
                <Text style={styles.menuText}>• Em uma tigela misture a mostarda, colorau, tempero baiano, vinho branco.</Text>
                <Text style={styles.menuText}>• Assim que estiverem tudo bem misturado, misturar esta mistura nas bistecas de porco.</Text>
                <Text style={styles.menuText}>• Regue com azeite e o suco de laranja ou abacaxi, verificar o sal.</Text>
                <Text style={styles.menuText}>• Leve para assar em forno pré-aquecido virando dos dois lados por 40 minutos, ou até a bisteca estiverem douradas.</Text>
                <Text style={styles.menuText}>• Tampe a panela de pressão e deixe por 1 hora e 50 minutos, para que ela fique bem macia.</Text>
                <Text style={styles.menuText}>• Retire e sirva.</Text>
              </View>
            </View>
          )}

          {selectedMenu === 'FRANGO' && (
            <View>
              <View style={[styles.menuView, { width: windowWidth * 0.9 }]}>
                <Text style={styles.menuTitle}>Espetinho Misto</Text>
                <Image
                  source={require('../../../assets/images/espetinho.jpg')}
                  style={styles.menuImage}
                />
                <Text style={styles.menuSubtitle}>Ingredientes: </Text>
                <Text style={styles.menuText}>• 1 kg de coração de frango</Text>
                <Text style={styles.menuText}>• 1 pacote de calabresa fininha</Text>
                <Text style={styles.menuText}>• 1/2 kg alcatra</Text>
                <Text style={styles.menuText}>• 1 cebola</Text>
                <Text style={styles.menuText}>• 1/2 kg de lombo suíno</Text>
                <Text style={styles.menuText}>• 1 kg de filé frango</Text>
                <Text style={styles.menuText}>• 1 pacote de bacon em fatias</Text>
                <Text style={styles.menuText}>• 1 pimentão amarelo</Text>

                <Text style={styles.menuSubtitle}>Modo de preparo: </Text>
                <Text style={styles.menuText}>• Corte as carnes, frango e calabresa em cubos e tempere a seu gosto, deixe curtir bem o tempero, antes de espetar as carnes envolva a carne suína no bacon para fazer um medalhão e espete.</Text>
                <Text style={styles.menuText}>• Depois coloque um pedaço de cada tipo para fazer seu espetinho misto, sempre intercalando com um pedaço de cebola e pimentão para dar aquele toque especial que fica uma delícia.</Text>
                <Text style={styles.menuText}>• Depois e só assar na brasa ou em uma churrasqueira elétrica tipo a minha que está na foto.</Text>
              </View>
              <View style={[styles.menuView, { width: windowWidth * 0.9 }]}>
                <Text style={styles.menuTitle}>Buffalo Wings</Text>
                <Image
                  source={require('../../../assets/images/asinha.jpg')}
                  style={styles.menuImage}
                />
                <Text style={styles.menuSubtitle}>Ingredientes: </Text>
                <Text style={styles.menuText}>• 1 kg de asinhas de frango</Text>
                <Text style={styles.menuText}>• 2 colheres de sopa de sal</Text>
                <Text style={styles.menuText}>• 1 colher de sopa de pimenta-caiena</Text>
                <Text style={styles.menuText}>• 1 xícara de molho de pimenta vermelho de sua preferência</Text>
                <Text style={styles.menuText}>• 1 colher de sopa de alho em pó</Text>
                <Text style={styles.menuText}>• 1 xícara de farinha de trigo</Text>
                <Text style={styles.menuText}>• 1 colher de sopa de páprica picante</Text>
                <Text style={styles.menuText}>• 1/2 colher de sopa de pimenta-do-reino</Text>
                <Text style={styles.menuText}>• 50 g de manteiga</Text>
                <Text style={styles.menuText}>• 2 colheres de sopa de cebola em pó</Text>

                <Text style={styles.menuSubtitle}>Modo de preparo: </Text>
                <Text style={styles.menuText}>• Em um recipiente, misture a farinha, o sal, a pimenta-caiena, a páprica e a pimenta-do-reino.</Text>
                <Text style={styles.menuText}>• Empane as asinhas de frango nessa mistura uma a uma.</Text>
                <Text style={styles.menuText}>• Frite as asinhas de frango, em óleo de canola, a 180°C e reserve.</Text>
                <Text style={styles.menuText}>• Elas devem ficar levemente douradas.</Text>
                <Text style={styles.menuText}>• Enquanto as asinhas fritam, prepare o molho.</Text>
                <Text style={styles.menuText}>• Derreta a manteiga e adicione a cebola e o alho em pó e, posteriormente, o molho de pimenta.</Text>
                <Text style={styles.menuText}>• Deixe ferver por uns 3 minutos e desligue.</Text>
                <Text style={styles.menuText}>• Jogue o molho por cima das asinhas, lembrando que quanto mais molho mais picantes ficarão as asinhas.</Text>
                <Text style={styles.menuText}>• Sirva acompanhada de alguns talos de salsão, se gostar, para quebrar um pouco o ardor.</Text>
              </View>
              <View style={[styles.menuView, { width: windowWidth * 0.9 }]}>
                <Text style={styles.menuTitle}>Coxa Creme</Text>
                <Image
                  source={require('../../../assets/images/coxa-creme.jpg')}
                  style={styles.menuImage}
                />
                <Text style={styles.menuSubtitle}>Ingredientes: </Text>
                <Text style={styles.menuText}>• 1 lata de creme de leite</Text>
                <Text style={styles.menuText}>• 3 gemas</Text>
                <Text style={styles.menuText}>• 6 coxas de frango cozido</Text>
                <Text style={styles.menuText}>• 3 claras do ovos ligeiramente batidas para empanar</Text>
                <Text style={styles.menuText}>• 50 g de manteiga</Text>
                <Text style={styles.menuText}>• 2 xícaras (chá) de farinha de trigo</Text>
                <Text style={styles.menuText}>• 3 colheres de sopa de salsinha</Text>
                <Text style={styles.menuText}>• Farinha de rosca para empanar</Text>
                <Text style={styles.menuText}>• Sal a gosto</Text>
                <Text style={styles.menuText}>• Temperos a gosto (cebola, alho etc)</Text>
                <Text style={styles.menuText}>• Óleo para fritar</Text>

                <Text style={styles.menuSubtitle}>Modo de preparo: </Text>
                <Text style={styles.menuText}>• Coloque as 6 coxas de frango para cozinhar com sal e temperos a gosto (cebola, alho, salsinha), após cozidas reserve uma xícara de chá do caldo coado do cozimento das coxas.</Text>
                <Text style={styles.menuText}>• Coloque para ferver o caldo das coxas, o creme de leite e a manteiga. </Text>
                <Text style={styles.menuText}>• Quando ferver acrescente a farinha e mexa sem parar por 2 minutos para que a massa cozinhe.</Text>
                <Text style={styles.menuText}>• Coloque as gemas, a salsinha e mexa rapidamente.</Text>
                <Text style={styles.menuText}>• Deixe esfriar um pouco, divida a massa em 6 pedaços e abra cada pedaço na palma das mãos. Coloque uma coxa e modele, de tal modo que a coxa fique coberta, deixando a ponta do osso de fora.</Text>
                <Text style={styles.menuText}>• Passe pela clara, pela farinha de rosca, aperte bem e frite em óleo quente sob imersão. Escorra, coloque em papel absorvente e sirva ainda quente.</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top', // Corrigi 'top' para 'flex-start'
    backgroundColor: '#000',
    borderTopColor: '#282C2D',
    borderTopWidth: 1,
  },
  title: {
    fontFamily: 'Karantina_400Regular',
    fontSize: 30,
    color: '#fff',
    marginTop: 40,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: 100,
    marginTop: 5,
  },
  underlineGray: {
    borderBottomWidth: 1,
    borderBottomColor: '#282C2D',
    marginTop: 20,
  },
  content: {},
  list: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50

  },
  menuItem: {
    flex: 1, // Para dividir igualmente dentro da largura
    marginRight: 10,
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Karantina_400Regular',
    fontSize: 24,
  },
  menuContent: {
    marginTop: 40,
    alignItems: 'center',
  },
  menuView: {
    backgroundColor: '#191B1B',
    alignContent: 'center',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10
  },
  menuTitle: {
    color: '#EF820D',
    fontFamily: 'Karantina_400Regular',
    fontSize: 32,
    textAlign: 'center'
  },
  menuImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    margin: 10
  },
  menuSubtitle: {
    color: '#EF820D',
    fontFamily: 'Karantina_400Regular',
    fontSize: 24,
    margin: 10,
    marginLeft: 15,
    letterSpacing: 2,
  },
  menuText: {
    color: '#fff',
    fontFamily: 'Karantina_400Regular',
    fontSize: 20,
    margin: 10,
    marginLeft: 15,
    letterSpacing: 1
  },
  selectedButtonText: {
    color: '#EF820D',
  },
});


