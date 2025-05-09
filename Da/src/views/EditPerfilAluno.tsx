import { View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Overlay, Button, Icon} from '@rneui/themed'
import { InputLogin } from "../styles/styled";
import { ScrollView } from "react-native-gesture-handler";


const EditPerfilALuno = () => {
    const navigation = useNavigation();
   
    return(
        <ScrollView style={{backgroundColor: 'white', paddingBottom: 50}}>
            <View style={styles.container}>
                
                <View style={styles.header}>
                    <View style={styles.containerHeader}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='arrowleft' type='ant-design' color={'white'} size={27}/>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>USER_484165</Text>
                    </View>
                </View>
                
                    <View style={styles.containerTopo}>
                        <Text style={styles.textEdit}>Editar Perfil</Text>
                <View style={styles.containerPerfil}>
                    <View style={{backgroundColor: '#F3C04D', width: 50, height: 50,borderRadius: '50%', alignItems: 'center', justifyContent: 'center', zIndex: 3, position: 'absolute', left: -10}}>
                <Image source={require('../images/icons/iconPerfilEdit.png')} style={styles.perfilIcon}/>
                </View>
                <Image source={require('../images/icons/perfilAluno.png')} style={styles.perfil}/>
                </View>
                </View>
                <View style={styles.containerInputs}>

                <InputLogin placeholder="Nome / Apelido:" placeholderTextColor={'#999393'}/>
                <InputLogin placeholder="Curso:" placeholderTextColor={'#999393'}/>
                <InputLogin style = {{height: 180}} placeholder="Descrição/Bio:" placeholderTextColor={'#999393'}/>
                <Button buttonStyle={styles.button} title={'Editar'} titleStyle={styles.textButton}/>
                <Button buttonStyle={styles.button} title={'Excluir Conta'} titleStyle={styles.textButton}/>
                </View>
            </View>
            </ScrollView>
        

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#5D17EB',
        padding: 15,
        width: '100%'
    },
    containerHeader: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'Sprite Graffiti Regular'
    },
    iconSair: {
        height: 25,
        width: 25
    },
    perfil: {
        height: 150,
        width: 150,
    },
    containerTopo: {
        marginTop: 50,
        rowGap: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textEdit: {
        fontSize: 18,
        fontFamily: 'Bryndan Write_fix',
    },
    perfilIcon: {
        width: 35,
        height: 35,
        bottom: 1,
        
    },
    containerPerfil: {
        justifyContent: 'flex-end'
    },
    containerInputs: {
        width: '85%',
        rowGap: 30,
        marginTop: 50
    },
    button: {
        padding: 8,
        backgroundColor: '#5D17EB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    textButton:{
        fontSize: 24,
        fontFamily: 'Bryndan Write_fix',
    },
   
})
export default EditPerfilALuno;