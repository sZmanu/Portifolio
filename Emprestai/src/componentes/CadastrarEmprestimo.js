import { Overlay } from '@rneui/themed';
import { useState } from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';


const CadastrarEmprestimo = () => {
    const [visible, setVisible] = useState(false);

const toggleOverlay = () => {
  setVisible(!visible);
};

    return(
        <View style={{marginTop: 40}}>
    <TouchableOpacity onPress={toggleOverlay} style={styles.buttonAdicionar}>
                <Text style={styles.textAdicionar}>Adicionar novo empréstimo</Text>
              </TouchableOpacity>
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.CadastrarLivro}>
      <ScrollView>
        <View style={styles.containerInputs}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Usuário:</Text>
      <TextInput style={styles.input}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Livro:</Text>
      <TextInput style={styles.input}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de empréstimo:</Text>
      <TextInput style={styles.input3}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de devolução:</Text>
      <TextInput style={styles.input2}/>
      </View>
      

      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5}}>
        <TouchableOpacity onPress={toggleOverlay} style={styles.btnSalvar}>
          <Text style={styles.textBtn}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleOverlay}style={styles.btnCancelar}>
          <Text style={styles.textBtn}>Cancelar</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </Overlay>
  </View>

    )
}
const styles = StyleSheet.create({
    button: {
      margin: 10,
    },
    CadastrarLivro: {
      height: '50%',
      width: '78%',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      backgroundColor: '#374151',
      borderRadius: 8,
      marginHorizontal: 2,
      color: 'white',
      fontFamily: 'Quicksand Medium',
      fontSize: 16,
      width: '78%'
    },
    input2: {
      borderRadius: 8,
      marginHorizontal: 2,
      color: 'white',
      fontFamily: 'Quicksand Medium',
      fontSize: 16,
      width: '44%'

    },
    input3: {
        borderRadius: 8,
        marginHorizontal: 2,
        color: 'white',
        fontFamily: 'Quicksand Medium',
        fontSize: 16,
        width: '40%'
      },
    containerInputs: {
      rowGap: 15,
      marginBottom: 40,
      marginTop: 35
    },
    inputContainer: {
      backgroundColor: '#374151',
      borderRadius: 8,
      marginHorizontal: 5,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 15,
      height: 42
      
    },
    inputContainerLivro: {
      backgroundColor: '#374151',
      borderRadius: 8,
      marginHorizontal: 5,
      alignItems: 'center',
      paddingLeft: 20,
      height:'auto', 
      rowGap: 15,
      paddingVertical: 10,
      
    },
    label: {
      color: 'white',
      fontFamily: 'Quicksand Medium',
      fontSize: 16
    },
    labelLivro: {
      color: 'white',
      fontFamily: 'Quicksand Medium',
      fontSize: 16,
      alignSelf: 'flex-start'
    },
    btnSalvar: {
      height: 35,
      width: 100,
      backgroundColor: '#1E3A8A',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 4
    },
    btnCancelar: {
      height: 35,
      width: 100,
      backgroundColor: '#3B82F6',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 4

    },
    textBtn: {
      color: 'white',
      fontFamily: 'Quicksand Medium',
      fontSize: 19

    },
    textPrimary: {
      marginVertical: 20,
      textAlign: 'center',
      fontSize: 20,
    },
    textSecondary: {
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 17,
    },
    buttonAdicionar: {
      width: 100,
      height: 30,
      backgroundColor: 'red'
   },
   buttonAdicionar: {
    width: 290,
    backgroundColor: '#1E3A8A',
    borderRadius: 10, 
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: 'black',
    borderColor: '#D1D5DB',
    borderWidth: 2,
    marginBottom: 15

},
 textAdicionar: {
  fontSize: 20,
  color: '#F5F5DC',
  fontFamily: 'Quicksand Medium',
  bottom: 3,
 }
    });
export default CadastrarEmprestimo;
