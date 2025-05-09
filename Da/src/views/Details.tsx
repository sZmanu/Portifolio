import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Details = ({ route }) => {
  const { sport } = route.params;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Image source={require('../images/voltar.png')} style={styles.backIcon} />
      </TouchableOpacity>
    
      <Image source={require('../images/AtleticaImg.png')} style={styles.logo} />
   
      <Text style={styles.title}>{sport.name}</Text>
      <Image source={sport.image} style={styles.sportIcon} />
      <View style={styles.separator} />

      <ScrollView style={styles.scrollContent} contentContainerStyle={styles.scrollInnerContent}>
        
        <Text style={styles.sectionTitle}>Descrição:</Text>
        <Text style={styles.description}>
          Time formado por: xxxx, xxxx, xxxx, xxxx, xxxx, xxxx, xxxx, xxxx, xxxx, xxxx, xxxx.
        </Text>
        <Text style={styles.description}>Técnico: Xxxxxx</Text>

        <View style={styles.separator} />

        <Text style={styles.sectionTitle}>Treinos:</Text>
        <View style={styles.trainingContainer}>
          <View style={styles.trainingCard}>
            <Text style={styles.trainingDate}>17</Text>
            <View style={styles.trainingDetails}>
              <Text style={styles.trainingInfo}>Data: 17/10/2024</Text>
              <Text style={styles.trainingInfo}>Horário: 13:00</Text>
              <Text style={styles.trainingInfo}>Local: FATEC Jundiaí</Text>
            </View>
          </View>

          <View style={styles.trainingCard}>
            <Text style={styles.trainingDate}>17</Text>
            <View style={styles.trainingDetails}>
              <Text style={styles.trainingInfo}>Data: 17/10/2024</Text>
              <Text style={styles.trainingInfo}>Horário: 13:00</Text>
              <Text style={styles.trainingInfo}>Local: FATEC Jundiaí</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Quero fazer parte</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    color: '#000',
  },
  sportIcon: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginVertical: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#D52527', 

    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: 'black',
    marginBottom: 10,
  },
  scrollContent: {
    flex: 1,
  },
  scrollInnerContent: {
    paddingBottom: 20,
  },
  trainingContainer: {
    marginBottom: 10,
  },
  trainingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D52527',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  trainingDate: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F8E40B',
    marginRight: 10,
    margin:10,
  },
  trainingDetails: {
    flex: 1,
  },
  trainingInfo: {
    fontSize: 14,
    marginStart: 15,
    color: 'black',
  },
  button: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#D52527',
    borderWidth: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#D52527',
    fontWeight: 'bold',
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
  },
  logo: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default Details;
