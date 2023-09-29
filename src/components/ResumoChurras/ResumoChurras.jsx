import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function ResumoChurras(){
    return(
        <ScrollView style={styles.container}>

            {/* Titulo do campo 1 */}
            <View style={ [styles.viewTitle] }>
                <Text style={ [globalStyles.text, styles.title] }>Participantes:</Text>
            </View>
            {/* Informações do campo 1 */}
            <View style={styles.campo1}>
                <Text style={ [globalStyles.text, styles.info] }>Adultos - <Text style={ {color: '#EF820D'} }>50</Text></Text>
                <Text style={ [globalStyles.text, styles.info] }>Jovens - <Text style={ {color: '#EF820D'} }>25</Text></Text>
                <Text style={ [globalStyles.text, styles.info] }>Crianças - <Text style={ {color: '#EF820D'} }>5</Text></Text>
            </View>


            {/* Titulo do campo 2 */}
            <View style={ [styles.viewTitle] }>
                <Text style={ [globalStyles.text, styles.title] }>Carnes:</Text>
            </View>
             {/* Informações do campo 2 */}
             <View style={styles.campo2}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>                  
                    <Text style={ [globalStyles.text, styles.infoTitle] }>BOVINAS       </Text>
                    <Text style={ [globalStyles.text, styles.infoTitle] }>QTD </Text>
                    <Text style={ [globalStyles.text, styles.infoTitle] }>PREÇO TOTAL </Text>
                </View>
                <View style={styles.linhaOrange}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={ [globalStyles.text, styles.info] }>Fraldinha</Text>
                    <Text style={ [globalStyles.text, styles.info] }>10kg </Text>
                    <Text style={ [globalStyles.text, styles.info] }>R$39,99 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={ [globalStyles.text, styles.info] }>Picanha </Text>
                    <Text style={ [globalStyles.text, styles.info] }> 10kg </Text>
                    <Text style={ [globalStyles.text, styles.info] }>R$39,99 </Text>
                </View>
                <View style={styles.linhaBlack}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>                  
                    <Text style={ [globalStyles.text, styles.infoTitle] }>SUINAS      </Text>
                    <Text style={ [globalStyles.text, styles.infoTitle] }>    QTD  </Text>
                    <Text style={ [globalStyles.text, styles.infoTitle] }>PREÇO TOTAL </Text>
                </View>
                <View style={styles.linhaOrange}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={ [globalStyles.text, styles.info] }>Linguiça</Text>
                    <Text style={ [globalStyles.text, styles.info] }>10kg </Text>
                    <Text style={ [globalStyles.text, styles.info] }>R$39,99 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={ [globalStyles.text, styles.info] }>Bisteca </Text>
                    <Text style={ [globalStyles.text, styles.info] }> 10kg </Text>
                    <Text style={ [globalStyles.text, styles.info] }>R$39,99 </Text>
                </View>
                <View style={styles.linhaBlack}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>                  
                    <Text style={ [globalStyles.text, styles.infoTitle] }>FRANGO     </Text>
                    <Text style={ [globalStyles.text, styles.infoTitle] }>    QTD  </Text>
                    <Text style={ [globalStyles.text, styles.infoTitle] }>PREÇO TOTAL </Text>
                </View>
                <View style={styles.linhaOrange}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={ [globalStyles.text, styles.info] }>Coração</Text>
                    <Text style={ [globalStyles.text, styles.info] }>10kg </Text>
                    <Text style={ [globalStyles.text, styles.info] }>R$39,99 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={ [globalStyles.text, styles.info] }>Tulipa  </Text>
                    <Text style={ [globalStyles.text, styles.info] }> 10kg </Text>
                    <Text style={ [globalStyles.text, styles.info] }>R$39,99 </Text>
                </View>
                <View style={styles.linhaBlack}></View>
                <View style={styles.linhaOrange}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={ [globalStyles.text, styles.info] }>Total:  </Text>
                    <Text style={ [globalStyles.text, styles.info] }>  </Text>
                    <Text style={ [globalStyles.text, styles.info] }>R$239,94 </Text>
                </View>
            </View>


            {/* Titulo do campo 3 */}
            <View style={ [styles.viewTitle] }>
                <Text style={ [globalStyles.text, styles.title] }>Bebidas:</Text>
            </View>
             {/* Informações do campo 3 */}
             <View style={styles.campo3}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>                  
                    <Text style={ [globalStyles.text, styles.infoTitle] }>ALCOÓLICAS  </Text>
                    <Text style={ [globalStyles.text, styles.infoTitle] }>    QTD  </Text>
                    <Text style={ [globalStyles.text, styles.infoTitle] }>PREÇO TOTAL </Text>
                </View>
                <View style={styles.linhaOrange}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={ [globalStyles.text, styles.info] }>Cerveja   </Text>
                    <Text style={ [globalStyles.text, styles.info] }>20 unidades</Text>
                    <Text style={ [globalStyles.text, styles.info] }>R$39,99 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={ [globalStyles.text, styles.info] }>Caipirinha</Text>
                    <Text style={ [globalStyles.text, styles.info] }>20 unidades</Text>
                    <Text style={ [globalStyles.text, styles.info] }>R$39,99 </Text>
                </View>
                <View style={styles.linhaBlack}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>                  
                    <Text style={ [globalStyles.text, styles.infoTitle] }>NÃO ALCOÓLICAS</Text>
                    <Text style={ [globalStyles.text, styles.infoTitle] }>QTD  </Text>
                    <Text style={ [globalStyles.text, styles.infoTitle] }>PREÇO TOTAL </Text>
                </View>
                <View style={styles.linhaOrange}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={ [globalStyles.text, styles.info] }>Suco 2L   </Text>
                    <Text style={ [globalStyles.text, styles.info] }>   05 unidades</Text>
                    <Text style={ [globalStyles.text, styles.info] }>R$39,99 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={ [globalStyles.text, styles.info] }>Refrigerante</Text>
                    <Text style={ [globalStyles.text, styles.info] }>20 unidades</Text>
                    <Text style={ [globalStyles.text, styles.info] }>R$39,99 </Text>
                </View>
                <View style={styles.linhaBlack}></View>
                <View style={styles.linhaOrange}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={ [globalStyles.text, styles.info] }>Total:  </Text>
                    <Text style={ [globalStyles.text, styles.info] }>  </Text>
                    <Text style={ [globalStyles.text, styles.info] }>R$239,94 </Text>
                </View>
            </View>

            {/* Titulo do campo 4 */}
            <View style={ [styles.viewTitle] }>
                <Text style={ [globalStyles.text, styles.title] }>Acompanhamentos:</Text>
            </View>
            {/* Informações do campo 4 */}
            <View style={styles.campo4}>

            </View>


            {/* Titulo do campo 5 */}
            <View style={ [styles.viewTitle] }>
                <Text style={ [globalStyles.text, styles.title] }>Suprimentos:</Text>
            </View>
            {/* Informações do campo 5 */}
            <View style={styles.campo5}>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },

    viewTitle: {
        padding: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },

    /* Parte 1 das informações */
    title: {
        fontSize: 30,
        padding: 2,
    },

    campo1: {
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-around',
        width: 340,
        height: 36,
        backgroundColor: '#191B1B',
        borderRadius: 5,
        elevation: 1,
    },

    info: {
        fontSize: 20,  
        padding: 2,
    },


    /* Parte 2 das informações */
    campo2: {
        alignSelf: 'center',
        flexDirection: 'column',
        width: 340,
        height: 415,
        backgroundColor: '#191B1B',
        borderRadius: 10,
        elevation: 1,
        padding: 5,
    },

    infoTitle: {
        fontSize: 25,
        color: '#EF820D',
    },

    linhaOrange: {
        backgroundColor: '#EF820D',
        width: '100%',
        height: 1,
        marginVertical: 10,
    },

    linhaBlack: {
        backgroundColor: '#000',
        width: "100%",
        height: 1,
        marginVertical: 10,
    },

    /* Parte 3 das informações */
    campo3: {
        alignSelf: 'center',
        flexDirection:'column',
        width: 340,
        height: 300,
        backgroundColor: '#191B1B',
        borderRadius: 10,
        elevation: 1,
        padding: 5,
    },

})