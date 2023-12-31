import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import ResumoChurras from '../../components/ResumoChurras/ResumoChurras';
import { globalStyles } from '../../styles/globalStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { nomeChurrasco} from '../../components/ResumoChurras/ResumoChurras'
import { salvaChurras } from '../../services/sqlite/functions';

export default function DetalheChurras() {

    const route = useRoute();
    const { infoInput } = route.params || {};

    return (
        <ScrollView style={styles.container}>

            {/* Titulo */}
            <Text style={[globalStyles.text, styles.title]}>RESUMO</Text>


            {/* informações dos campos*/}
            <View>
                <ResumoChurras resumo={infoInput}/>
            </View>

            {/* <TouchableOpacity onPress={null}>
                <Text style={ [globalStyles.text] }>CONFIRMAR</Text>
            </TouchableOpacity> */}

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },

    title: {
        fontSize: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        margin: 20,
        alignSelf: 'center',
    },

})