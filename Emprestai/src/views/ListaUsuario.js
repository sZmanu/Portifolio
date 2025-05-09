import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import CadastrarUsuario from "../componentes/CadastrarUsuario";
import CardUsuario from "../componentes/CardUsuario";

const Usuario = () => {
    return(
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F5F5DC'}} style={{ flex: 1,paddingBottom: 80 }}>
            <LinearGradient colors={['#F5F5DC', '#3B82F6']} style={styles.container}>
        <View style={{width: '100%', height: 50, backgroundColor: '#1E3A8A', position: 'absolute',top: 0}}></View>
            <View style={{width: '90%', justifyContent: 'center', alignItems: 'center', rowGap: 15, marginTop: 50, marginBottom: 30}}>
       
        <View style={{flexDirection: 'row', top: 20}}>
        <Text style={styles.title1}>Lista d</Text>
        <Text style={styles.title2}>e Usuários</Text>
        </View>
        <CadastrarUsuario/>
        <View style={styles.containerCards}>
        <CardUsuario/>
        <CardUsuario/>
        <CardUsuario/>
        <CardUsuario/>
        </View>
        </View>
        </LinearGradient>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  
    },
    title1: {
        color: '#1E3A8A',
        fontFamily: 'Quicksand SemiBold',
        fontSize: 37
    },
    title2: {
        color: '#3B82F6',
        fontFamily: 'Quicksand SemiBold',
        fontSize: 37
    },
    containerCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 10,
        rowGap: 25,
        justifyContent: 'center',
        paddingHorizontal: 7,
    }
})
export default Usuario;