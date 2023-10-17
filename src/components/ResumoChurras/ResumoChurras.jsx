import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;

export default function ResumoChurras({resumo}){

    let BovinasSelec = [];
    let SuinasSelec  = [];
    let FrangoSelec  = [];
    let BebidasAlcSelec = [];
    let BebidasSelec = [];
    let AcompSelec   = [];
    let SuprimSelec  = [];
    const Adultos   = resumo[0].qtdAdultos;
    const Jovens    = resumo[0].qtdJovens;
    const Criancas  = resumo[0].qtdCriancas;
    const totalConv = resumo[0].qtdAdultos + resumo[0].qtdJovens + resumo[0].qtdCriancas;


// dummyResumo = [
//     {
//         qtdAdultos: "0",
//         qtdJovens: "0",
//         qtdCriancas: "0",
//         cBovinas: [
//             {label: "a", selected: true},
//             {},
//             {}
//         ],
//         cSuinas: [],
//         cFrango: [],
//         Bebidas: [],
//         Acomp: [],
//         Suprim: []
//     },
// ];

// Algúm erro aparente aqui "Cannot Read Property Of Undefined"
    for (let x = 0; x <= 5; x++){
        // Lista de checkboxes que possuem 3 opções diferentes
        if (x <= 2){
            if (resumo[0].cFrango[x].selected === true){
                FrangoSelec.push(resumo[0].cFrango[x].label)
            }
        }
        if (x <= 4){
            // Lista de checkboxes que possuem 5 opções diferentes
            if (resumo[0].cBovinas[x].selected === true){
                BovinasSelec.push(resumo[0].cBovinas[x].label);
            }
            if (resumo[0].cSuinas[x].selected === true){
                SuinasSelec.push(resumo[0].cSuinas[x].label);
            }
            if (resumo[0].Suprim[x].selected === true){
                SuprimSelec.push(resumo[0].Suprim[x].label);
            }
            if (resumo[0].Bebidas[x].selected === true){
                if (resumo[0].Bebidas[x].label === 'Caipirinha [300ml]'|| 
                    resumo[0].Bebidas[x].label === 'Cerveja [lata]'){
                    BebidasAlcSelec.push(resumo[0].Bebidas[x].label);
                } else {
                    BebidasSelec.push(resumo[0].Bebidas[x].label);
                }
            }
        }
        if (x <= 5){
            // Lista de checkboxes que possuem 6 opções diferentes
            if (resumo[0].Acomp[x].selected === true){
                AcompSelec.push(resumo[0].Acomp[x].label);
            }
        }
    }

    console.log(BovinasSelec[0]);
    console.log(SuinasSelec[0]);
    console.log(FrangoSelec[0]);
    console.log(BebidasAlcSelec[0]);
    console.log(BebidasSelec[0]);
    console.log(AcompSelec[0]);
    console.log(SuprimSelec[0]);
    
    return(
        <ScrollView style={styles.container}>

            {/* Titulo do campo 1 */}
            <View style={ [styles.viewTitle] }>                
                <Text style={ [globalStyles.text, styles.title] }>Participantes: {totalConv}</Text>
            </View>
            {/* Informações do campo 1 */}
            <View style={styles.campo1}>
                <Text style={ [globalStyles.text, styles.info, {textAlign: 'left'}] }>Adultos : <Text style={ {color: '#EF820D'} }>{Adultos}</Text></Text>
                <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>Jovens : <Text style={ {color: '#EF820D'} }>{Jovens}</Text></Text>
                <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'}] }>Crianças : <Text style={ {color: '#EF820D'} }>{Criancas}</Text></Text>
                
            </View>


            {/* |||||||||||||||||||||||||||| TITULO  CAMPO 2 CARNES |||||||||||||||||||||||||||||||||||||| */}
            <View style={ [styles.viewTitle] }>
                <Text style={ [globalStyles.text, styles.title] }>Carnes:{totalConv}</Text>
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