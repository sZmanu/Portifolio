import { Overlay } from '@rneui/themed';
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const EditarLivro = () => {
    const [visible, setVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

const toggleOverlay = () => {
  setVisible(!visible);
};
const handleImagePicker = () => {
  const options = {
    mediaType: 'photo',
    maxWidth: 800,
    maxHeight: 800,
    quality: 0.8,
  };

  launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('Seleção de imagem cancelada');
    } else if (response.errorCode) {
      Alert.alert(
        'Erro',
        response.errorMessage || 'Ocorreu um erro ao acessar a galeria',
      );
    } else if (response.assets && response.assets.length > 0) {
      const selectedImageUri = response.assets[0].uri;
      setSelectedImage(selectedImageUri); 
    }
  });
};
    return(
        <View>
          <TouchableOpacity onPress={toggleOverlay} style={styles.buttonEditar}>
            <Text style={styles.textButton}>Editar</Text>
          </TouchableOpacity>
    
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.CadastrarLivro}>
      <ScrollView>
        <View style={styles.containerInputs}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Titulo:</Text>
      <TextInput style={styles.input}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Autor:</Text>
      <TextInput style={styles.input}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data publicação:</Text>
      <TextInput style={styles.input2} placeholder='DD/MM/YY' placeholderTextColor={'white'}/>
      </View>
      <View style={styles.inputContainerSipnose}>
        <Text style={styles.label}>Sipnose:</Text>
      <TextInput style={styles.inputSipnose}/>
      </View>
      <View style={styles.inputContainerLivro}>
  <Text style={styles.labelLivro}>Capa do Livro:</Text>

  {selectedImage ? (
  <TouchableOpacity onPress={handleImagePicker}>
    <Image 
      source={{ uri: selectedImage }}
      style={{ width: 100, height: 100, borderRadius: 5, marginBottom: 10}}
    />
  </TouchableOpacity>
) : (
  <TouchableOpacity onPress={handleImagePicker} style={{ 
      width: 120, 
      height: 150, 
      borderWidth: 1, 
      borderColor: '#ccc', 
      justifyContent: 'center', 
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 10
      
    }}>
    <Text style={{color: 'white', fontFamily: 'Quicksand Medium', fontSize: 12}}>Adicionar Imagem</Text>
  </TouchableOpacity>
)}
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
      height: '78%',
      width: '78%',
      borderRadius: 10
    },

    input: {
      backgroundColor: '#374151',
      borderRadius: 8,
      marginHorizontal: 2,
      color: 'white',
      fontFamily: 'Quicksand Medium',
      fontSize: 16,
      width: '80%'
    },
    input2: {
      backgroundColor: '#374151',
      borderRadius: 8,
      marginHorizontal: 2,
      color: 'white',
      fontFamily: 'Quicksand Medium',
      fontSize: 16,
      width: '48%'
    },
    inputSipnose: {
      backgroundColor: '#374151',
      borderRadius: 8,
      marginHorizontal: 2,
      color: 'white',
      fontFamily: 'Quicksand Medium',
      fontSize: 16,
      width: '97%',
      paddingRight: 10
    },
    inputContainerSipnose: {
      backgroundColor: '#374151',
      borderRadius: 8,
      marginHorizontal: 5,
      alignItems: 'flex-start',
      paddingLeft: 15,
      height: 150,
      paddingVertical: 10
    },
    containerInputs: {
      rowGap: 15,
      marginBottom: 30
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
      paddingLeft: 15,
      
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
      alignItems: 'center'
    },
    btnCancelar: {
      height: 35,
      width: 100,
      backgroundColor: '#3B82F6',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center'

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
      width: 255,
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
   },
   buttonEditar: {
    width: 45,
    height: 15,
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
export default EditarLivro;
