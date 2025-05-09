import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Membros = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>   
        <View style={styles.memberContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../images/perfil.png')} style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>Nome: Maria Aparecida</Text>
            <Text style={styles.roleText}>Cargo: Presidente</Text>
          </View>
        </View>      
        <View style={styles.memberContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../images/perfil.png')} style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>Nome: Maria Aparecida</Text>
            <Text style={styles.roleText}>Cargo: Presidente</Text>
          </View>
        </View>         
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  scrollContainer: {
    alignItems: 'center', 
    paddingBottom: 20,  
    width: 350,
  },
  memberContainer: {
    alignItems: 'center',
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#5D17EB',
    marginBottom: 10,
    paddingBottom: 50,
    width: 350
  },
  iconContainer: {
    width: 230,
    height: 150,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'flex-start',
    top: 15,
    marginTop: 15,
    alignSelf: 'flex-start',
    fontFamily:'Bryndan Write_fix', 
  },
  nameText: {
    fontSize: 18,
    fontFamily:'Bryndan Write_fix', 
  },
  roleText: {
    fontSize: 14,
    color: '#555',
    fontFamily:'Bryndan Write_fix', 
  },
});

export default Membros;
