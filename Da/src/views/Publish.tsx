import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Overlay} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';

const Publish = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('Foto');
  const [selectedImage, setSelectedImage] = useState(null);
  const [postText, setPostText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const handleOptionSelect = option => {
    setSelectedOption(option);
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

  const isPublishable =
    selectedOption === 'Foto'
      ? selectedImage !== null
      : postText.trim().length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileContainer}>
          <Icon
            name="account-circle"
            size={45}
            color="#FFF"
            style={styles.profileIcon}
          />
          <Text style={styles.profileText}>D.A FATEC JD</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contentContainer}>
        <Text style={styles.title}>PUBLICAR</Text>

        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === 'Foto' && styles.selectedOptionButton,
            ]}
            onPress={() => handleOptionSelect('Foto')}>
            <Text
              style={[
                styles.optionText,
                selectedOption === 'Foto' && styles.selectedOptionText,
              ]}>
              Foto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === 'Post' && styles.selectedOptionButton,
            ]}
            onPress={() => handleOptionSelect('Post')}>
            <Text
              style={[
                styles.optionText,
                selectedOption === 'Post' && styles.selectedOptionText,
              ]}>
              Post
            </Text>
          </TouchableOpacity>
        </View>

        {selectedOption === 'Foto' ? (
          <View style={styles.uploadContainer}>
            <TouchableOpacity onPress={handleImagePicker}>
              <Icon
                name="plus"
                size={40}
                color="#999393"
                style={styles.addIcon}
              />
            </TouchableOpacity>
            <Text style={styles.uploadText}>Selecionar fotos</Text>
          </View>
        ) : (
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Qual a boa?"
              placeholderTextColor="#999393"
              multiline
              value={postText}
              onChangeText={setPostText}
            />
          </View>
        )}

        {selectedImage && selectedOption === 'Foto' && (
          <View style={styles.selectedImageContainer}>
            <Image source={{uri: selectedImage}} style={styles.selectedImage} />
          </View>
        )}

        <Button
          title="publicar"
          buttonStyle={[
            styles.publishButton,
            {backgroundColor: isPublishable ? '#5D17EB' : '#ECE9E9'},
          ]}
          titleStyle={styles.publishButtonText}
          disabled={!isPublishable}
          onPress={() => {
            if (isPublishable) {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                setIsPublished(true);
              }, 3000); // Simulação
            }
          }}
        />
      </ScrollView>

      {isLoading && (
        <Overlay
          isVisible={true}
          overlayStyle={{
            width: '80%',
            height: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                color: '#5D17EB',
                marginBottom: 20,
                fontFamily: 'Bryndan Write_fix',
              }}>
              Publicando...
            </Text>
            <View
              style={{
                width: '80%',
                height: 10,
                backgroundColor: '#ECE9E9',
                borderRadius: 5,
              }}>
              <View
                style={{
                  width: '40%',
                  height: '100%',
                  backgroundColor: '#5D17EB',
                  borderRadius: 5,
                }}
              />
            </View>
          </View>
        </Overlay>
      )}

      <Overlay
        isVisible={isPublished}
        onBackdropPress={() => setIsPublished(false)}
        overlayStyle={{
          width: '80%',
          height: '50%',
          justifyContent: 'center',
          borderRadius: 15,
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 15,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              top: 100,
            }}>
            <Image
              source={require('../images/fundoCirculo.png')}
              style={{position: 'absolute'}}
            />
            <Image
              source={require('../images/circuloVerificado.png')}
              style={{position: 'absolute'}}
            />
          </View>

          <Text
            style={{
              color: '#5D17EB',
              textAlign: 'center',
              top: 90,
              fontSize: 23,
              fontFamily: 'Bryndan Write_fix',
            }}>
            Publicado com Sucesso
          </Text>
          <Button
            title={'OK'}
            onPress={() => setIsPublished(false)}
            buttonStyle={{
              height: 38,
              borderRadius: 20,
              width: 200,
              backgroundColor: '#5D17EB',
              fontFamily: 'Bryndan Write_fix',
            }}
            titleStyle={{
              fontSize: 23,
              height: 30,
              fontFamily: 'Bryndan Write_fix',
            }}
          />
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5D17EB',
    paddingLeft: 15,
    height: 100,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20,
    marginTop: -20,
    overflow: 'hidden',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileText: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 10,
    fontFamily: 'Bryndan Write_fix',
  },
  title: {
    fontSize: 32,
    color: '#5D17EB',
    fontFamily: 'Sprite Graffiti Regular',
    textAlign: 'center',
    marginVertical: 20,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#5D17EB',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginHorizontal: 10,
  },
  selectedOptionButton: {
    backgroundColor: '#5D17EB',
    borderColor: '#5D17EB',
  },
  optionText: {
    fontSize: 18,
    color: '#5D17EB',
    fontFamily: 'Bryndan Write_fix',
  },
  selectedOptionText: {
    color: '#FFFFFF',
  },
  uploadContainer: {
    borderWidth: 2,
    borderColor: '#999393',
    borderStyle: 'dashed',
    borderRadius: 10,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
    backgroundColor: '#ECE9E9',
  },
  textInputContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  textInput: {
    height: 150,
    borderColor: '#999393',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    textAlignVertical: 'top',
    backgroundColor: '#F5F5F5',
    fontFamily: 'Bryndan Write_fix',
  },
  uploadText: {
    color: '#999393',
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Bryndan Write_fix',
  },
  selectedImageContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  publishButton: {
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 15,
  },
  publishButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Bryndan Write_fix',
  },
});

export default Publish;
