import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Sports = () => {
  const navigation = useNavigation();
  const [selectedSportId, setSelectedSportId] = useState(null);

  const sportsData = [
    { id: 1, name: 'FUTEBOL', image: require('../images/futebol.png') },
    { id: 2, name: 'JOGOS DE TABULEIRO', image: require('../images/xadrez.png') },
    { id: 3, name: 'VOLEI', image: require('../images/volei.png') },
    { id: 4, name: 'BASQUETE', image: require('../images/basquete.png') },
  ];

  const handlePress = (sport) => {
    setSelectedSportId(sport.id);
    navigation.navigate('Details', { sport });
  };

  // Restaura o estado `selectedSportId` para `null` sempre que a tela fica em foco
  useFocusEffect(
    React.useCallback(() => {
      setSelectedSportId(null);
    }, [])
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 18, fontFamily: 'Bryndan Write_fix', }}>CONHEÇA NOSSAS MODALIDADES</Text>
      <View style={styles.gridContainer}>
        {sportsData.map((sport) => (
          <TouchableOpacity
            key={sport.id}
            style={[
              styles.sportContainer,
              selectedSportId === sport.id && styles.sportContainerSelected,
            ]}
            onPress={() => handlePress(sport)}
          >
            <Image source={sport.image} style={styles.icon} />
            <Text style={selectedSportId === sport.id ? styles.textSelected : styles.text}>{sport.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  sportContainer: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#D52527',
    backgroundColor: 'transparent',
    width: 150,
    height: 150,
    justifyContent: 'center',
    borderRadius: 10,
  },
  sportContainerSelected: {
    backgroundColor: '#D52527', 
  },
  icon: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'black',
  },
  textSelected: {
    color: 'white',
  },
});

export default Sports;
