import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

const ContactUsDA  = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.image}>
            <Icon name='arrowleft' type='ant-design' color={'#5D17EB'} size={27}/>
                </TouchableOpacity>
            <Text style={styles.title}>FALE CONOSCO</Text>
            <View style={styles.containerComponents}>
            <View style={styles.containerQuemSomos}>
                <Text style={styles.quemSomosText}>Olá somos o diretório acadêmico de Jundiaí...</Text>
            </View>
            <View style={styles.containerRedes}>
            <Text style={styles.textSubTitle}>Para mais informações fale conosco por:</Text>
            <TouchableOpacity>
            <View style={styles.containerInsta}>
            <Image source={require('../images/instagram.png')} style={styles.icon} />
            <Text style={styles.textRede}>INSTAGRAM</Text>
            </View>
            </TouchableOpacity>
            </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20
    },
    containerQuemSomos: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#5D17EB',
        borderRadius: 15,
        height: 300,
        padding: 25,
        marginTop: 50
    },
    quemSomosText: {
        color: '#F3C04D',
        fontSize: 20,
        fontFamily: 'Bryndan Write_fix',
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        fontFamily:'Bryndan Write_fix', 
    },
    image: {
        alignSelf: 'flex-start'
    },
    textSubTitle: {
        fontSize: 18,
        fontFamily:'Bryndan Write_fix', 
    },
    containerRedes: {
        marginTop: 50, 
        width: 360,
        rowGap: 20,
     },
    containerInsta: {
        backgroundColor: '#5D17EB',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 50,
        width: 250,
        paddingLeft: 10,
        columnGap: 20

    },
    containerComponents: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        
    },
    icon: {
        width: 35,
        height: 35,
        tintColor: '#F3C04D',
      },
      textRede: {
        fontSize: 18,
        color: '#F3C04D',
        fontFamily:'Bryndan Write_fix', 
      }
})
export default ContactUsDA;