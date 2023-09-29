import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ResumoChurras from '../../components/ResumoChurras/ResumoChurras';
import { globalStyles } from '../../styles/globalStyles';
import { ScrollView } from 'react-native-gesture-handler';

export default function DetalheChurras (){

    return(
        <ScrollView style={styles.container}>

            {/* Titulo */}
            <Text style={ [globalStyles.text, styles.title] }>RESUMO</Text>


            {/* informações dos campos*/}
            <View>
                <ResumoChurras />
            </View>
            
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