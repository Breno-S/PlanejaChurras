import { useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import gerarListaCompras from "../../services/calculos/calculoQuantidade";
import { fetchPrice, getPreco } from "../../services/sqlite/functions";
import { salvaChurras } from '../../services/sqlite/functions';

const windowWidth = Dimensions.get('window').width;

export default function ResumoChurras(){
    
    const route = useRoute();
    const resumo = route.params.infoInput || {};

    if (resumo[0].qtdAdultos == ''){
        resumo[0].qtdAdultos = '0';
    }
    if (resumo[0].qtdJovens == ''){
        resumo[0].qtdJovens = '0';
    }
    if (resumo[0].qtdCriancas == ''){
        resumo[0].qtdCriancas = '0';
    }

    
    let nomeChurras = resumo[0].nomeChurras;
    const Adultos   = resumo[0].qtdAdultos;
    const Jovens    = resumo[0].qtdJovens;
    const Criancas  = resumo[0].qtdCriancas;
    const totalConv = parseInt(resumo[0].qtdAdultos) + parseInt(resumo[0].qtdJovens) + parseInt(resumo[0].qtdCriancas);

    
    
    // let listaCompras = gerarListaCompras(enviaDados);
    let listaCompras = gerarListaCompras(resumo);
    // console.log(listaCompras[0].cBovinas);
    

    const obterPrecos = async (produto) => {
        const selectedItems = produto.filter(item => item.selected);
        const prices = {};

        if (selectedItems.length === 0) {
            return prices;
        }

        for(let item of selectedItems){
            try{
                const price = await fetchPrice(item.label);
                prices[item.label] = price;
            }
            catch (error){
                console.error(error)
            }
        }
        return prices;
    }

    const [pricescBovinas, setPricescBovinas] = useState({});
    const [pricescSuinas, setPricescSuinas] = useState({});
    const [pricescFrango, setPricescFrango] = useState({});
    const [pricesBebidas, setPricesBebidas] = useState({});
    const [pricesAcomp, setPricesAcomp] = useState({});
    const [pricesSuprim, setPricesSuprim] = useState({});

    const [pricesTotalCarnes, setPricesTotalCarnes] = useState(0.0);
    const [pricesTotalBebidas, setPricesTotalBebidas] = useState(0.0);
    const [pricesTotalAcomp, setPricesTotalAcomp] = useState(0.0);
    const [pricesTotalSuprim, setPricesTotalSuprim] = useState(0.0);

    const [pricesTotalChurras, setPricesTotalChurras] = useState(0.0);
    
    const fetchData = async () => {
        try{
            setPricescBovinas(await obterPrecos(resumo[0].cBovinas));
            let buffer_cBovinas = await obterPrecos(resumo[0].cBovinas);

            listaCompras[0].cBovinas.map(async (item, index) => {
                if (item.selected) {
                    const qtd_gramas = item.quantidade;
                    const valUni = buffer_cBovinas[`${item.label}`];
                    if (buffer_cBovinas.hasOwnProperty(item.label)) {
                        buffer_cBovinas[`${item.label}`] = (valUni * (qtd_gramas / 1000.00))
                    }
                    
                    setPricesTotalCarnes((prevState) => prevState + buffer_cBovinas[item.label]);
                }
            })
            
            setPricescSuinas(await obterPrecos(resumo[0].cSuinas));
            let buffer_cSuinas = await obterPrecos(resumo[0].cSuinas);
            
            listaCompras[0].cSuinas.map(async (item, index) => {
                if (item.selected) {
                    const qtd_gramas = item.quantidade;
                    const valUni = buffer_cSuinas[`${item.label}`];
                    if (buffer_cSuinas.hasOwnProperty(item.label)) {
                        buffer_cSuinas[`${item.label}`] = (valUni * (qtd_gramas / 1000.00))
                    }
                    
                    setPricesTotalCarnes((prevState) => prevState + buffer_cSuinas[item.label]);
                }
            })

            setPricescFrango(await obterPrecos(resumo[0].cFrango));
            let buffer_cFrango = await obterPrecos(resumo[0].cFrango);

            listaCompras[0].cFrango.map(async (item, index) => {
                if (item.selected) {
                    const qtd_gramas = item.quantidade;
                    const valUni = buffer_cFrango[`${item.label}`];
                    if (buffer_cFrango.hasOwnProperty(item.label)) {
                        buffer_cFrango[`${item.label}`] = (valUni * (qtd_gramas / 1000.00))
                    }
                    
                    setPricesTotalCarnes((prevState) => prevState + buffer_cFrango[item.label]);
                }
            })
            
            setPricesBebidas(await obterPrecos(resumo[0].Bebidas));
            let buffer_Bebidas = await obterPrecos(resumo[0].Bebidas);

            listaCompras[0].Bebidas.map(async (item, index) => {
                if (item.selected) {
                    const qtd_gramas = item.quantidade;
                    const valUni = buffer_Bebidas[`${item.label}`];
                    if (buffer_Bebidas.hasOwnProperty(item.label)) {
                        buffer_Bebidas[`${item.label}`] = (valUni * (qtd_gramas))
                    }
                    
                    // console.log(item.label, buffer_Bebidas[`${item.label}`]);
                    setPricesTotalBebidas((prevState) => prevState + buffer_Bebidas[`${item.label}`]);
                }
            })

            setPricesSuprim(await obterPrecos(resumo[0].Suprim));
            let buffer_Suprim = await obterPrecos(resumo[0].Suprim)
            // console.log('bufferSuprim:',buffer_Suprim);
            
            listaCompras[0].Suprim.map(async (item, index) => {
                if (item.selected) {
                    const qtd_Suprim = item.quantidade;
                    const valUni = buffer_Suprim[`${item.label}`];
                    if (buffer_Suprim.hasOwnProperty(item.label)) {
                        buffer_Suprim[`${item.label}`] = (valUni * (qtd_Suprim))
                    }
                    setPricesTotalSuprim((prevState) => prevState + buffer_Suprim[`${item.label}`]);
                }
            })
            


            setPricesAcomp(await obterPrecos(resumo[0].Acomp));
            let buffer_Acomp = await obterPrecos(resumo[0].Acomp);
            // console.log('ANTES bufferAcomp:',buffer_Acomp);

            listaCompras[0].Acomp.map(async (item, index) => {
                if (item.selected) {
                    const qtd_Acomp = item.quantidade;
                    const valUni = buffer_Acomp[`${item.label}`];
                    if (buffer_Acomp.hasOwnProperty(item.label)) {
                        if (item.label == 'Pão de Alho' || item.label == 'Pão Francês' || item.label == 'Arroz'){
                            buffer_Acomp[`${item.label}`] = (valUni * (qtd_Acomp / 1000));
                        } else {
                            buffer_Acomp[`${item.label}`] = (valUni * (qtd_Acomp));
                        }
                        // console.log(buffer_Acomp[`${item.label}`],' = valUni:',valUni,'* qtdAcomp:',qtd_Acomp)
                        // console.log('DEPOIS bufferAcomp:',buffer_Acomp);
                    }
                    
                    setPricesTotalAcomp((prevState) => prevState + buffer_Acomp[item.label]);
                }
            })

        
        setPricesTotalChurras(pricesTotalCarnes + pricesTotalBebidas + pricesTotalAcomp + pricesTotalSuprim);
        listaCompras[0].precoTotal = pricesTotalChurras;
        listaCompras[0].precoPessoa = pricesTotalChurras / listaCompras[0].qtdAdultos;


        } catch (error){
            console.error('Erro ao obter os preços:', error);
        }
    }
    
    useEffect(() => {   
        fetchData();
    }, []);
    
    // console.log('Lista De Compras: ',listaCompras[0]);
    
    return(
        <ScrollView style={styles.container}>
            
            {/* Titulo do campo 1 */}
            <View style={ [styles.viewTitle] }>                
                <Text style={ [globalStyles.text, styles.title] }>Nome do Churrasco: {nomeChurras}{'\n'}</Text>
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
                    
                    
                    {listaCompras[0].cBovinas.map((item, index) => {
                        if (item.selected) {
                            // console.log("item: ", item);
                            const price = pricescBovinas[item.label] || 0;
                            return(
                                <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Text adjustsFontSizeToFit={true} numberOfLines={2} style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.value}</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>{item.quantidade}g</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$ {(price * item.quantidade / 1000).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
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
                    {listaCompras[0].cSuinas.map((item, index) => {
                        if (item.selected) {
                            const price = pricescSuinas[item.label] || 0;
                            return(
                                <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Text adjustsFontSizeToFit={true} numberOfLines={2} style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.value}</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>{item.quantidade}g</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$ {(price * item.quantidade / 1000).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
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
                    {listaCompras[0].cFrango.map((item, index) => {
                        if (item.selected) {
                            const price = pricescFrango[item.label] || 0;
                            return(
                                <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Text adjustsFontSizeToFit={true} numberOfLines={2} style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.value}</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>{(item.quantidade).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}g</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$ {(price * item.quantidade / 1000).toLocaleString('pt-BR', {maximumFractionDigits: 2})}</Text>
                                </View>
                            )    
                        }
                    })}
                </View>

                <View style={styles.linhaBlack}></View>

                {/* ================================= TOTAL CARNES ===================================== */}
                <View style={styles.section}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'left'}] }>Total:</Text>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'right'}] }>R${(pricesTotalCarnes).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
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

                    {listaCompras[0].Bebidas.map((item, index) => {
                        if (item.alcoholic){
                            const price = pricesBebidas[item.label] || 0;
                                return(
                                    <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Text adjustsFontSizeToFit={true} numberOfLines={2} style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.value}</Text>
                                        <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>{item.quantidade} uni.</Text>
                                        <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$ {(price * item.quantidade).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
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
                    {/* {BebidasSelec.map((item, index) => {
                        const price = pricesBebidas[item.label] || 0;
                        // return(
                        //     <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        //         <Text style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item} {(item == "Água") ? "": ((item == "Refrigerante") ? "[2L]": "[1L]")}</Text>
                        //         <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>{(item == "Água") ? listaCompras[`${item}`].quantidade : ((item == "Refrigerante") ? listaCompras[`${item}`].quantidade/2 : listaCompras[`${item}`].quantidade)} {(item == "Água") ? "L": "uni."}</Text>
                        //         <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$ {(price * listaCompras[`${item}`].quantidade).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
                        //     </View>
                        // )    
                        
                    })} */}
                    {listaCompras[0].Bebidas.map((item, index) => {
                        if (item.alcoholic == false){
                            const price = pricesBebidas[item.label] || 0;
                            return(
                                <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Text adjustsFontSizeToFit={true} numberOfLines={2} style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.value}</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>{item.quantidade} {item.label == 'Água' ? "L" : "uni."}</Text>
                                    <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$ {(price * item.quantidade).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
                                </View>
                            )
                        }            
                    })}
                </View>

                <View style={styles.linhaBlack}></View>

                {/* ================================= TOTAL BEBIDAS ===================================== */}
                <View style={styles.section}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'left'}] }>Total:</Text>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'right'}] }>R${(pricesTotalBebidas).toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2})}</Text>
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
                    {/* ================================= CABEÇALHO ACOMPANHAMENTOS ===================================== */}
                    <View style={ [styles.header] }>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'left'}  ] }>PRODUTOS</Text>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'center'}] }>QTD</Text>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'right'} ] }>PREÇO</Text>
                    </View>
                    {
                        listaCompras[0].Acomp.map((item, index) => {
                            const price = pricesAcomp[item.label] || 0;
                            switch (item.label) {
                                case "Arroz":
                                    return(
                                        <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Text adjustsFontSizeToFit={true} numberOfLines={2} style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.value}</Text>
                                            <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>{item.quantidade / 1000} uni.</Text>
                                            <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$ {(price * item.quantidade / 1000).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
                                        </View>
                                    );
                                case "Pão Francês":
                                    return(
                                        <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Text adjustsFontSizeToFit={true} numberOfLines={2} style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.value}</Text>
                                            <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>{item.quantidade}g{'\n'}({item.quantidade / 50} uni.)</Text>
                                            <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$ {(price * item.quantidade / 1000).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
                                        </View>
                                    );
                                case "Farofa Pronta":
                                    return(
                                        <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Text adjustsFontSizeToFit={true} numberOfLines={2} style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.value}</Text>
                                            <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>{item.quantidade} uni.</Text>
                                            <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$ {(price * item.quantidade ).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
                                        </View>
                                    );
                                case "Queijo Coalho":
                                    return(
                                        <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Text adjustsFontSizeToFit={true} numberOfLines={2} style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.value}</Text>
                                            <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>{item.quantidade} uni.</Text>
                                            <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$ {(price * item.quantidade).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
                                        </View>
                                    );
                                case "Pão de Alho":
                                    return(
                                        <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Text adjustsFontSizeToFit={true} numberOfLines={2} style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.value}</Text>
                                            <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>{item.quantidade}g{'\n'}({item.quantidade / 80} uni.)</Text>
                                            <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$ {(price * item.quantidade / 1000).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
                                        </View>
                                    );
                                default:
                                    break;
                            }
                                
                        })
                    }
                </View>

                <View style={styles.linhaBlack}></View>

                {/* ================================= TOTAL ACOMPANHAMENTOS ===================================== */}
                <View style={styles.section}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'left'}] }>Total:</Text>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'right'}] }>R${(pricesTotalAcomp).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
                    </View>
                </View>
            </View>


            {/* Titulo do campo 5 SUPRIMENTOS*/}
            <View style={ [styles.viewTitle] }>
                <Text style={ [globalStyles.text, styles.title] }>Suprimentos:</Text>
            </View>
            {/* Informações do campo 5 SUPRIMENTOS*/}
            <View style={styles.cardAllSelected}>
                {/* ================================= CABEÇALHO SUPRIMENTOS ===================================== */}
                <View style={ [styles.header] }>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'left'}  ] }>PRODUTOS</Text>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'center'}] }>QTD</Text>
                        <Text style={ [globalStyles.text, styles.infoTitle, {textAlign: 'right'} ] }>PREÇO</Text>
                    </View>
                <View style={styles.section}>
                    {listaCompras[0].Suprim.map((item, index) => {
                        if (item.selected) {
                            const price = pricesSuprim[item.label] || 0;
                            if (item.label === 'Carvão'){
                                return(
                                <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Text style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.value}</Text>
                                        <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>{item.quantidade} uni.</Text>
                                        <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$ {(price * item.quantidade).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
                                </View>
                                )
                            }else{
                                return(
                                    <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Text style={ [globalStyles.text, styles.info, {textAlign: 'left'}  ] }>{item.value}</Text>
                                        <Text style={ [globalStyles.text, styles.info, {textAlign: 'center'}] }>{item.quantidade} uni.</Text>
                                        <Text style={ [globalStyles.text, styles.info, {textAlign: 'right'} ] }>R$ {(price * item.quantidade).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
                                    </View>
                                )
                            }
                        }
                    })}
                </View>

                <View style={styles.linhaBlack}></View>

                {/* ================================= TOTAL SUPRIMENTOS ===================================== */}
                <View style={styles.section}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'left'}] }>Total:</Text>
                        <Text style={ [globalStyles.text, styles.info, {width: '50%', textAlign: 'right'}] }>R${(pricesTotalSuprim).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>
                    </View>
                </View>
            </View>
            
            <TouchableOpacity style={ styles.newButton} onPress={() => salvaChurras(listaCompras[0])}>
                <Text style={ {fontFamily: 'Graduate_400Regular', color: '#fff', textAlign: 'center'} }>Salvar{'\n'}Evento</Text>
            </TouchableOpacity>
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
