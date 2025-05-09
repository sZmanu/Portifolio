import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GalleryEventos = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const galleryData = Array.from({ length: 30 }).map((_, index) => ({
    id: index.toString(),
    image: require('../images/galeria.png'),
  }));

  const renderGalleryItem = ({ item }) => (
    <View style={styles.galleryItem}>
      <Image source={item.image} style={styles.galleryIcon} />
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Image source={require('../images/voltar.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.title}>GALERIA</Text>

      <FlatList
        data={galleryData}
        renderItem={renderGalleryItem}
        keyExtractor={(item) => item.id}
        numColumns={4}
        contentContainerStyle={styles.galleryContainer}
      />
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginVertical: 20,
  },
  galleryContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  galleryItem: {
    width: 60,
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  galleryIcon: {
    width: 50,
    height: 50,
    tintColor: '#5D17EB', 
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    
  },
  backIcon: {
    width: 30,
    height: 30,
    tintColor: '#5D17EB', 
  },
  logo: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default GalleryEventos;
