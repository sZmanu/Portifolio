import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Gallery = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
      <Ionicons name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>

      <Image source={require('../images/AtleticaImg.png')} style={styles.logo} />

      <Text style={styles.title}>GALERIA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    marginVertical: 20,
    fontFamily: 'Bryndan Write_fix',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  logo: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default Gallery;