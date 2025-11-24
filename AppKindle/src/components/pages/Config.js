import { View, Text, StyleSheet} from 'react-native';
import {Icon} from '@rneui/themed';
import BarraPesquisa from '../BarraPesquisa';



function Tela4 (){
    return(
        <View style={{flex: 1, backgroundColor: '#eeebebff', borderTopColor: '#d6d6d6', borderTopWidth: 2}}>
        <BarraPesquisa/>
            <View style={style.container}>
                <Icon name='fire' type='material-community' size={30}/>
            <Text style={style.text}>Informações de leitura</Text>
            </View>
            
            <View style={style.container}>
            <Icon name='notebook' type='simple-line-icon' size={24}/>
            <Text style={style.text}>Cadernos</Text>
            </View>
            
            <View style={style.container}>
            <Icon name='settings-outline' type='ionicon'size={24}/>
            <Text style={style.text}>Configurações</Text>
            </View>
            
            <View style={style.container}>
            <Icon name='feedback' type='material' size={24}/>
            <Text style={style.text}>Ajuda e comentários</Text>
            </View>
            
            <View style={style.container}>
            <Icon name='information-outline'type='material-community' size={26}/>
            <Text style={style.text}>Informações</Text>
            </View>
            
            <View style={style.container}>
            <Icon name='logout' type='simple-line-icon' size={24}/>
            <Text style={style.text}>Sair</Text>
            </View>
            

        </View>
    )

}
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        columnGap: 15,
        height: 50,
        paddingHorizontal: 10,  borderBottomWidth: 1, borderBottomColor: '#d8d8d8ff',
        backgroundColor: 'white',
        paddingLeft: 20
    },
    text: {
        fontSize: 15,
        color: 'black',
        fontWeight: '500'
    },
})
export default Tela4;