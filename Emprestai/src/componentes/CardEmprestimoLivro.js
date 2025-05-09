import { Text, View,  StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';

const CardEmprestimoLivro = () => {
    const [title, setTitle] = useState('Titulo')
    const [usuario, setUsuario] = useState('')
    const [dataEmprestimo, setDataEmprestimo] = useState(null)
    const [dataDevolução, setDataDevolucao] = useState(null)

    return(
        <View style={styles.containerCard}>
            <View style={{flexWrap: 'wrap', alignItems: 'center'}}>
            <Text style={styles.title}>{title}</Text>
            </View>
            <View style={{backgroundColor: 'white', height: 150, width: 120, margin: 5}}></View>
            <View style={{marginTop: 3}}>
            <View style={styles.containerInform}>
            <Text style={styles.textInform}>Usuário:</Text>
            <Text style={styles.textResult}>{usuario}</Text>
            </View>
            <View style={styles.containerInform}>
            <Text style={styles.textInform}>Data de empréstimo:</Text>
            <Text style={styles.textResult}>{dataEmprestimo}</Text>
            </View>
            <View style={styles.containerInform}>
            <Text style={styles.textInform}>Devolução:</Text>
            <Text style={styles.textResultDevolucao}>{dataDevolução}</Text>
            </View>
            
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonEmprestimo}>
                    <Text style={styles.textButton}>Devolvido</Text>
                </TouchableOpacity>
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
    textResultDevolucao: {
        fontFamily: 'Quicksand Medium',
        fontSize: 13,
        color: '#1E3A8A'

    },
    containerButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 10,
        marginBottom: 2,
        justifyContent: 'center',
    },
    buttonEmprestimo: {
        width: 55,
        height: 17,
        backgroundColor: '#1E3A8A',
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
export default CardEmprestimoLivro;