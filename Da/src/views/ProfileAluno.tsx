import React, {useState} from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Overlay, Button, Icon } from '@rneui/themed'

export const ItensMenuPerfil = () => {
    const [visibleOverlay, setVisibleOverlay] = useState(null); 

    const toggleOverlay = (overlayName) => {
        setVisibleOverlay(visibleOverlay === overlayName ? null : overlayName);
    };

    return (
        <View style={{ backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'space-evenly', width: 174, height: 100, borderColor: '#5D17EB', borderWidth: 2}}>
            <TouchableOpacity onPress={() => toggleOverlay("sair")} style={{ width: '100%', alignItems: 'center', borderBottomColor: '#5D17EB', borderBottomWidth: 2, height: 40, justifyContent: 'center' }}>
                <Text style={{ fontSize: 22, textAlign: 'center', color: '#5D17EB', fontFamily: 'Bryndan Write_fix' }}>Sair da conta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleOverlay("excluir")} style={{ width: '100%', alignItems: 'center', height: 30, justifyContent: 'center' }}>
                <Text style={{ fontSize: 22, textAlign: 'center', color: '#5D17EB', fontFamily: 'Bryndan Write_fix' }}>Excluir conta</Text>
            </TouchableOpacity>

            {/* Overlay para "Sair da conta" */}
            <Overlay
                isVisible={visibleOverlay === "sair"}
                onBackdropPress={() => toggleOverlay("sair")}
                overlayStyle={{width: '100%', height: '40%', justifyContent: 'flex-start', borderTopRightRadius: 50, borderTopLeftRadius: 50, top: 260, borderColor: '#5D17EB', borderWidth: 2}}
            >
                <View style={{ width: '100%', height: 200, justifyContent: 'space-between', alignItems: 'center', padding: 15, marginTop: 25}}>
                    <Text style={{ color: '#5D17EB', textAlign: 'center', fontSize: 30, fontFamily: 'Bryndan Write_fix'}}>Tem certeza que deseja sair da conta?</Text>
                    <View style={{flexDirection: 'row', columnGap: 30}}>
                    <Button
                        title={'Desistir'}
                        onPress={() => toggleOverlay("sair")}
                        buttonStyle={{ height: 50, borderRadius: 40, width: 150, backgroundColor: '#5D17EB', padding: 3, justifyContent: 'center', alignItems: 'center'}}
                        titleStyle={{ fontSize: 30, fontFamily: 'Bryndan Write_fix' }}
                    />
                    <Button
                        title={'Sair'}
                        onPress={() => toggleOverlay("sair")}
                        buttonStyle={{ height: 50, borderRadius: 40, width: 150, backgroundColor: 'white', padding: 3, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#5D17EB'}}
                        titleStyle={{ fontSize: 30, color: '#5D17EB', fontFamily: 'Bryndan Write_fix'}}
                    />
                    </View>
                </View>
            </Overlay>

            {/* Overlay para "Excluir conta" */}
            <Overlay
                isVisible={visibleOverlay === "excluir"}
                onBackdropPress={() => toggleOverlay("excluir")}
                overlayStyle={{width: '100%', height: '40%', justifyContent: 'flex-start', borderTopRightRadius: 50, borderTopLeftRadius: 50, top: 260, borderColor: '#5D17EB', borderWidth: 2}}
            >
                <View style={{ width: '100%', height: 200, justifyContent: 'space-between', alignItems: 'center', padding: 15, marginTop: 25}}>
                    <Text style={{ color: '#5D17EB', textAlign: 'center', fontSize: 30, fontFamily: 'Bryndan Write_fix'}}>Tem certeza que deseja excluir conta?</Text>
                    <View style={{flexDirection: 'row', columnGap: 30}}>
                    <Button
                        title={'Desistir'}
                        onPress={() => toggleOverlay("excluir")}
                        buttonStyle={{ height: 50, borderRadius: 40, width: 150, backgroundColor: '#5D17EB', padding: 3, justifyContent: 'center', alignItems: 'center'}}
                        titleStyle={{ fontSize: 30, fontFamily: 'Bryndan Write_fix' }}
                    />
                    <Button
                        title={'Excluir'}
                        onPress={() => toggleOverlay("excluir")}
                        buttonStyle={{ height: 50, borderRadius: 40, width: 150, backgroundColor: 'white', padding: 3, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#5D17EB'}}
                        titleStyle={{ fontSize: 30, color: '#5D17EB', fontFamily: 'Bryndan Write_fix'}}
                    />
                    </View>
                </View>
            </Overlay>
        </View>
    );
};

const ProfileAluno = () => {
    const [menu, setMenu] = useState(false);
    const navigation = useNavigation();

    const navigateToEvents = (type: string) => {
        navigation.navigate('Eventos', { eventType: type });
    }

    function mostrarMenu() {
    setMenu(!menu); 
  }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerHeader}>
                <Text style={styles.headerText}>USER_484165</Text>
                <TouchableOpacity onPress={mostrarMenu}>
                <Icon name="log-out" type="feather" size={30} color={'white'}/>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.itensPerfil}>
                <View style={styles.containerTopo}>
            <Image source={require('../images/icons/perfilAluno.png')} style={styles.perfil}/>
            <TouchableOpacity onPress={() => navigation.navigate("EditPerfilALuno")} style={styles.iconEditar}>
                <Icon name="user-edit" type="font-awesome-5" color={'#5D17EB'} />
            </TouchableOpacity>
            </View>
      
      {menu && ( 
        <View style={{ zIndex: 2, position: 'absolute', top: 0, right: 10,}}>
            <ItensMenuPerfil />
            </View>
      )}
      
            <Text style={styles.textUser}>USER_484165</Text>
            <Icon name="calendar" type="ionicon" color={'#5D17EB'} size={40} style={styles.iconCalendar}/>
                
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={() => navigateToEvents("Meus eventos")}>
                    <Text style={styles.textButton}>Meus Eventos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigateToEvents("Eventos que participei")}>
                <Text style={styles.textButton}>Eventos que Participei</Text>
                </TouchableOpacity>
            </View>

        </View>
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
        justifyContent: 'flex-end',
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
        left: 10
    },
    containerTopo: {
        flexDirection: 'row',
        marginTop: 30, 
    },
    iconEditar: {
       left: 100,
    },
    textUser: {
        fontSize: 15,
        fontFamily: 'Bryndan Write_fix',
        textAlign: 'center',
        marginTop: 20
    },
    iconCalendar: {
        alignSelf: 'center',
        marginTop: 30
    },
    itensPerfil: {
        borderBottomColor: '#5e17eb67',
        borderBottomWidth: 1,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 15
    },
    containerButton:{
        rowGap: 30,
        marginTop: 80
    },
    button: {
        borderRadius: 40,
        borderColor: '#5D17EB',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 70
    },
    textButton:  {
        fontSize: 24,
        color: '#5D17EB',
        fontFamily: 'Bryndan Write_fix',


    }
})
export default ProfileAluno;