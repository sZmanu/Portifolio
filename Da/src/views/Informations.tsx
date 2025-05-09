import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export const Documents = () => {
    const navigation = useNavigation();
    return(
        <View style={{alignItems: 'center', justifyContent: 'flex-start', flex: 1, backgroundColor: 'white'}}>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginVertical: 20}}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                <Image source={require('../images/icons/setaEsquerda.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image  source={require('../images/icons/download.png')}/>
                </TouchableOpacity>

            </View>
            <Image source={require('../images/imageDaDocumento.png')} style={{width: 370, height: 700, borderWidth: 1, borderColor: '#5D17EB'}}/>
        </View>
    )
}

const Informations = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
    <View style={{ flex: 1, alignItems: 'center', padding: 20, backgroundColor: 'white', }}>
      <View style={styles.gridContainer}>
       
       <View style={styles.container}>
       <TouchableOpacity onPress={() => navigation.navigate('Documents')}>
    <View style={styles.sportContainer}>
        <Image source={require('../images/documento.png')} style={styles.icon}/>
    </View>
    </TouchableOpacity>
    <Text style={styles.text}>DOCUMENTOS</Text>
    </View>
    <View  style={styles.container}>
    <View style={styles.sportContainer}>
        <Image source={require('../images/estatuto.png')} style={styles.icon}/>
    </View>
   
    <Text style={styles.text}>ESTATUTO</Text>
   
    </View>
    <View style={styles.container}>
    <View style={styles.sportContainer}>
        <Image source={require('../images/codigo.png')} style={styles.icon}/>
    </View>
    <Text style={styles.text}>CÓDIGO DE CONDULTA DA CASINHA</Text>
    </View>
    <View  style={styles.container}>
    <View style={styles.sportContainer}>
        <Image source={require('../images/abaixoAssinado.png')} style={styles.icon}/>
    </View>
    <Text style={styles.text}>ABAIXO ASSINADO</Text>
    </View>

      </View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    gap: 15
  },
  sportContainer: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#5D17EB',
    backgroundColor: 'transparent',
    width: 150,
    height: 150,
    justifyContent: 'center',
    borderRadius: 10,
  },
  sportContainerSelected: {
    backgroundColor: '#5D17EB', 
  },
  icon: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    fontFamily:'Bryndan Write_fix', 
  },
  textSelected: {
    color: 'white',
    fontFamily:'Bryndan Write_fix', 
  },
  container: {
    alignItems: 'center', 
    width: 160,
    fontFamily:'Bryndan Write_fix', 
  }
});

export default Informations;
