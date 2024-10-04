import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';


const { width, height } = Dimensions.get('window'); 

export default function TelaTemperatura() {
    const [valor, setValor] = useState('');
    const [resultado, setResultado] = useState('');
    const [grandeza, setGrandeza] = useState('');
    const [erro, setErro] = useState('');
    const navigation = useNavigation();


    const converter = () => {
      Keyboard.dismiss();
       setErro('');

        
        if (!grandeza) {
            setErro('Por favor, selecione um tipo de conversão!');
            return;
        }

      
        let valorNumerico = parseFloat(valor);
        if (isNaN(valorNumerico)) {
            setResultado('Insira um valor válido');
            return;
        }
        if (grandeza === 'CtoF') {
            let conversao = (valorNumerico * 9 / 5) + 32;
            setResultado(`${valorNumerico} ºC \n=\n ${conversao.toFixed(2)} ºF`);
        } else if (grandeza === 'FtoC') {
            let conversao = (valorNumerico - 32) * 5 / 9;
            setResultado(`${valorNumerico} ºF \n=\n ${conversao.toFixed(2)} ºC`);
        }
    };

    const renderContent = (
      <View style={styles.container}>
        <Image
          source={require('../assets/eclipse.png')}
          style={{ width: width, height: height * 0.5, top: -12, position: 'absolute', }}
        />

        <View style={styles.fundoBotao}>
          <TouchableOpacity style={styles.trocar}>
            <Text style={styles.botaoTexto}>Temperatura</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.trocar2}
            onPress={() => navigation.navigate('TelaVelocidade')}>
            <Text style={styles.botaoTexto2}>Velocidade</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fundo}>
          <Text style={styles.texto}>Conversão de Temperatura</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={grandeza}
              style={styles.picker}
              onValueChange={(itemValue) => setGrandeza(itemValue)}
              mode={Platform.OS === 'ios' ? 'dropdown' : 'dialog'}>
              <Picker.Item label="Selecione a conversão" value="" />
              <Picker.Item label="Celsius para Fahrenheit" value="CtoF" />
              <Picker.Item label="Fahrenheit para Celsius" value="FtoC" />
            </Picker>
          </View>

          <TextInput
            style={styles.Input}
            placeholder="Insira uma temperatura"
            keyboardType="numeric"
            value={valor}
            onChangeText={(text) => setValor(text)} />

          <TouchableOpacity style={styles.botao} onPress={converter}>
            <Text style={styles.botaoTexto}>Converter</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resultadoContainer}>
          {resultado !== '' && <Text style={styles.resultadoTexto}>{resultado}</Text>}
        </View>
        {erro !== '' && <Text style={styles.erro}>{erro}</Text>}
      </View>
    );

    return Platform.OS !== 'web' ? (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {renderContent}
      </TouchableWithoutFeedback>
    ) : (
      renderContent
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'between',
      alignItems: 'center',
      padding: 20,
    },
    fundo: {
      width: '95%',
      padding: 13,
      backgroundColor: '#d6d6d6',
      borderRadius: 10,
      alignItems: 'center',
    },
    texto: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: '#36560D',
    },
    pickerContainer: {
        width: '100%',
        backgroundColor: '#fff', 
        borderRadius: 5, 
        overflow: 'hidden', 
        height: 40, 
        marginBottom: 20, 
        alignItems:'center',
        justifyContent:'center',
        border: 'none'
      },
      picker: {
        width: '100%',
        border:'none',
        backgroundColor: '#ffff'
      
      },
    Input: {
      width: '100%',
      height: 40,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      marginBottom: 10,
      paddingLeft: 15,
      border: 'none'
    },
    resultadoTexto: {
      fontSize: 18,
      textAlign: 'center',
      color: '#36560D'
      
    },
    resultadoContainer: {
        width: '95%',
        height: 110,
        backgroundColor: '#d6d6d6',
        marginTop: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
    
    },
    
    fundoBotao: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '80%', 
      borderRadius: 20,
      marginBottom: 160,
      top: 90,
      padding: 4,
    },
    
    trocar: {
      backgroundColor: '#36560D',
      borderRadius: 10,
      width: '50%', 
      height: 23,
      justifyContent: 'center', 
      alignItems: 'center',
    },
    
    trocar2: {
      backgroundColor: '#ffff',
      borderRadius: 10,
      width: '50%', 
      height: 23,
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    
    botaoTexto: {
      color: '#fff',
      fontWeight: '400',
    },
    botaoTexto2: {
        fontWeight: '700',
        color: '#36560D',
      },
    botao: {
      width: '60%',
      paddingVertical: 10,
      backgroundColor: '#36560D',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      top: 30,
    },
    erro: {
        color: '#36560D',
        marginTop: 10,
        fontSize: 16,
    },
  
  });