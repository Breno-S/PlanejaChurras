import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;

export default function ResumoChurras({resumo}){


    let selecionado = [];

    // const tamanho = Object.keys(resumo[0].cBovinas.selected).length
    // const tamanho = resumo[0].cBovinas.selected.length();

    for (let x = 0; x < 1 ; x++){
         if (resumo[x].cBovinas.selected == true){
            selecionado.push(resumo[x].cBovinas.label)
         }
    }
    
    

    return(
        <ScrollView style={styles.container}>

            {/* Titulo do campo 1 */}
            <View style={ [styles.viewTitle] }>
                <Text style={[globalStyles.text]}>{resumo[0].cSuinas.map(item => item.label).join(',')}</Text>
                <Text style={[globalStyles.text]}>{resumo[0].cSuinas.map(item => item.selected).join(',')}</Text>
                <Text style={ [globalStyles.text, styles.title] }>Participantes:</Text>
            </View>
            {/* Informações do campo 1 */}
            <View style={styles.campo1}>
                <Text style={ [globalStyles.text, styles.info, {textAlign: 'left'}] }>Adultos : <Text style={ {color: '#EF820D'} }>{resumo[0].qtdAdultos}</Text></Text>
                <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>Jovens : <Text style={ {color: '#EF820D'} }>{resumo[0].qtdJovens}</Text></Text>
                <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'}] }>Crianças : <Text style={ {color: '#EF820D'} }>{resumo[0].qtdCriancas}</Text></Text>
            </View>


            {/* |||||||||||||||||||||||||||| TITULO  CAMPO 2 CARNES |||||||||||||||||||||||||||||||||||||| */}
            <View style={ [styles.viewTitle] }>
                <Text style={ [globalStyles.text, styles.title] }>Carnes:</Text>
            </View>

            {/* |||||||||||||||||||||||||||| INFORMAÇÕES CAMPO 2 CARNES ||||||||||||||||||||||||||||||||||*/}
            <View style={styles.cardAllSelected}>

                <View style={styles.section}>
                    {/* =============================== CABEÇALHO BOVINA ===================================== */}
                    <View style={ [ styles.header ] }>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'left'}  ] }>BOVINAS</Text>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'center'}] }>QTD</Text>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'right'} ] }>PREÇO</Text>
                    </View>
                    {/* ============================= SELECIONADOS ================================ */}
                    
                    {resumo[0].cBovinas.map((item, index) => {
                        if (item.selected) {
                            return(
                                <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.label}</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>10kg</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$39,99</Text>
                                </View>
                            )    
                        }
                    })}

                </View>

                <View style={styles.section}>
                    {/* ================================= CABEÇALHO SUINAS ===================================== */}
                    <View style={ [styles.header] }>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'left'}  ] }>SUINAS</Text>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'center'}] }>QTD</Text>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'right'} ] }>PREÇO</Text>
                    </View>
                    {/* ================================= SELECIONADO ===================================== */}
                    {resumo[0].cSuinas.map((item, index) => {
                        if (item.selected) {
                            return(
                                <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.label}</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>10kg</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$39,99</Text>
                                </View>
                            )    
                        }
                    })}
                </View>

                <View style={styles.section}>
                    {/* ================================= CABECALHO FRANGO ===================================== */}
                    <View style={ [styles.header] }>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'left'}  ] }>FRANGO</Text>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'center'}] }>QTD</Text>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'right'} ] }>PREÇO</Text>
                    </View>
                    {/* ================================= SELECIONADOS ===================================== */}
                    {resumo[0].cFrango.map((item, index) => {
                        if (item.selected) {
                            return(
                                <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.label}</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>10kg</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$39,99</Text>
                                </View>
                            )    
                        }
                    })}
                </View>

                <View style={styles.linhaBlack}></View>

                {/* ================================= TOTAL CARNES ===================================== */}
                <View style={styles.section}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'left'}] }>Total:</Text>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'right'}] }>R$239,94</Text>
                    </View>
                </View>
                
            </View>


            {/* ||||||||||||||||||||||||||||||| TITULO CAMPO 3 BEBIDAS ||||||||||||||||||||||||||||||||||| */}
            <View style={ [styles.viewTitle] }>
                <Text style={ [globalStyles.text, styles.title] }>Bebidas:</Text>
            </View>

            {/* |||||||||||||||||||||||||| INFORMAÇÕES CAMPO 3 BEBIDAS |||||||||||||||||||||||||||||| */}
            <View style={styles.cardAllSelected}>

                <View style={styles.section}>
                    {/* ================================= CABEÇALHO BEBIDAS ALCOOLICAS ===================================== */}
                    <View style={ [styles.header] }>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'left'}  ] }>ALCOÓLICAS</Text>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'center'}] }>QTD</Text>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'right'} ] }>PREÇO</Text>
                    </View>
                    {/* ================================= SELECIONADOS BEBICAS ALCOOLICAS  ===================================== */}
                    {resumo[0].Bebidas.map((item, index) => {
                        if (item.selected) {
                            return(
                                <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.label}</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>10kg</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$39,99</Text>
                                </View>
                            )    
                        }
                    })}
                </View>

                <View style={styles.section}>
                    {/* ================================= CABECALHO BEBIDAS NAO ALCOOLICAS ===================================== */}
                    <View style={ [styles.header] }>
                        <Text numberOfLines={1} adjustsFontSizeToFit={true} style={ [globalStyles.text, styles.infoTitle, {textAlign: 'left'}] }>NÃO ALCOÓLICAS</Text>
                        <Text adjustsFontSizeToFit={true} style={ [globalStyles.text, styles.infoTitle, {textAlign: 'center'}] }>QTD</Text>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'right'} ] }>PREÇO</Text>
                    </View>
                    {/* ================================= SELECIONADOS BEBIDAS NAO ALCOOLICAS ===================================== */}
                    {resumo[0].Bebidas.map((item, index) => {
                        if (item.selected) {
                            return(
                                <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.label}</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>10kg</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$39,99</Text>
                                </View>
                            )    
                        }
                    })}
                </View>

                <View style={styles.linhaBlack}></View>

                {/* ================================= TOTAL BEBIDAS ===================================== */}
                <View style={styles.section}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'left'}] }>Total:</Text>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'right'}] }>R$239,94</Text>
                    </View>
                </View>
            </View>

            {/* Titulo do campo 4 ACOMPANHAMENTOS*/}
            <View style={ [styles.viewTitle] }>
                <Text style={ [globalStyles.text, styles.title] }>Acompanhamentos:</Text>
            </View>
            {/* Informações do campo 4 ACOMPANHAMENTOS*/}
            <View style={styles.cardAllSelected}>
                <View style={styles.section}>
                    {resumo[0].Acomp.map((item, index) => {
                        if (item.selected) {
                            return(
                                <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.label}</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>10kg</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$39,99</Text>
                                </View>
                            )
                        }
                    })}
                </View>

                <View style={styles.linhaBlack}></View>

                {/* ================================= TOTAL ACOMPANHAMENTOS ===================================== */}
                <View style={styles.section}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'left'}] }>Total:</Text>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'right'}] }>R$239,94</Text>
                    </View>
                </View>
            </View>


            {/* Titulo do campo 5 SUPRIMENTOS*/}
            <View style={ [styles.viewTitle] }>
                <Text style={ [globalStyles.text, styles.title] }>Suprimentos:</Text>
            </View>
            {/* Informações do campo 5 SUPRIMENTOS*/}
            <View style={styles.cardAllSelected}>
                <View style={styles.section}>
                    {resumo[0].Suprim.map((item, index) => {
                        if (item.selected) {
                            return(
                                <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.label}</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>10kg</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$39,99</Text>
                                </View>
                            )
                        }
                    })}
                </View>

                <View style={styles.linhaBlack}></View>

                {/* ================================= TOTAL SUPRIMENTOS ===================================== */}
                <View style={styles.section}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'left'}] }>Total:</Text>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'right'}] }>R$239,94</Text>
                    </View>
                </View>
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
        flexDirection:'row',
        justifyContent: 'space-between',
        padding: 5, 
        backgroundColor: '#191B1B',
        borderRadius: 5,
        elevation: 1,
        width: windowWidth*0.9
    },

    info: {
        width: '33%',
        fontSize: 20,  
        padding: 2,
    },


    /* Parte 2 das informações */
    cardAllSelected: {
        alignSelf: 'center',
        flexDirection: 'column',
        backgroundColor: '#191B1B',
        borderRadius: 5,
        elevation: 1,
        width: windowWidth * 0.9,
    },

    infoTitle: {
        fontSize: 25,
        color: '#EF820D',
        width: '33%',
    },

    section: {
        padding: 5,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#EF820D',
        borderBottomWidth: 1,
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
    },

    /* Parte 3 das informações */
    campo3: {
        alignSelf: 'center',
        flexDirection:'column',
        height: 300,
        backgroundColor: '#191B1B',
        borderRadius: 10,
        elevation: 1,
        padding: 5,
        width: windowWidth * 0.9
    },

})