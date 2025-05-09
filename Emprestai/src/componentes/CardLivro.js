import { Text, View,  StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import EditarLivro from './EditarLivro';
import VisualizarLivro from './VisualizarLivro';

const CardLivro = () => {
    const [title, setTitle] = useState('Titulo')
    const [autor, setAutor] = useState('')
    const [dataPublicacao, setDataPuplicacao] = useState(null)
    const [status, setStatus] = useState(false)
    const navigation = useNavigation();

    return(
        <View style={styles.containerCard}>
            <View style={{flexWrap: 'wrap', alignItems: 'center'}}>
            <Text style={styles.title}>{title}</Text>
            </View>
            <View style={{backgroundColor: 'white', height: 150, width: 120, margin: 5}}></View>
            <View style={{marginTop: 3}}>
            <View style={styles.containerInform}>
            <Text style={styles.textInform}>Autor:</Text>
            <Text style={styles.textResult}>{autor}</Text>
            </View>
            <View style={styles.containerInform}>
            <Text style={styles.textInform}>Data de publicação:</Text>
            <Text style={styles.textResult}>{dataPublicacao}</Text>
            </View>
            <View style={styles.containerInform}>
            <Text style={styles.textInform}>Status:</Text>
            <Text style={styles.textResultStatus}>{status ? 'Disponível' : 'Emprestado'}</Text>
            </View>
            <View style={styles.containerButton}>
                <EditarLivro/>
                <TouchableOpacity style={styles.buttonExcluir}>
                    <Text style={styles.textButton}>Excluir</Text>
                </TouchableOpacity>
                <VisualizarLivro/>
            </View>
            </View>        
        </View>
    )
}
const styles = StyleSheet.create({
    containerCard: {
       backgroundColor: '#D1D5DB',
       borderRadius: 12,
       width: 170,
       justifyContent: 'space-evenly',
       alignItems: 'center',
       paddingVertical: 10,
       paddingHorizontal: 10,
       rowGap: 1,
       elevation: 4,
       shadowColor: 'black',
       shadowOpacity: 0.5,
    },
    title: {
        color: '#374151',
        fontFamily: 'Quicksand Bold',
        fontSize: 15
    },
    containerInform: {
        flexDirection: 'row',
        columnGap: 5,
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
        alignItems: 'center',
        height: 'auto',
    },
    textInform: {
        fontSize: 13,
        fontFamily: 'Quicksand Bold',
        color: '#374151'
    },
    textResult: {
        fontFamily: 'Quicksand Medium',
        fontSize: 13,
    },
    textResultStatus: {
        fontFamily: 'Quicksand Medium',
        fontSize: 13,
        color: '#3B82F6'

    },
    containerButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 10,
        marginBottom: 2,
        justifyContent: 'space-between',
    },
    buttonExcluir: {
        width: 45,
        height: 15,
        backgroundColor: '#374151',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
    textButton: {
        fontSize: 8,
        fontFamily: 'Quicksand Bold',
        color: 'white'
    },
     
});
export default CardLivro;