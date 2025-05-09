import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Team from '../views/Team';
import Sports from '../views/Sports';
import ContactUs from '../views/ContactUs';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const AthleticTabs = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBar,
        tabBarIndicatorStyle: styles.tabBarIndicator,
      }}
    >
      <Tab.Screen
        name="Equipe"
        component={Team}
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={[styles.tabContainer, focused && styles.tabContainerFocused]}>
              <Text style={[styles.tabText, focused && styles.tabTextFocused]}>Equipe</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Esportes"
        component={Sports}
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={[styles.tabContainer, focused && styles.tabContainerFocused]}>
              <Text style={[styles.tabText, focused && styles.tabTextFocused]}>Esportes</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Fale Conosco"
        component={() => null}
        options={{
          tabBarLabel: ({ focused }) => (
            <TouchableOpacity
              style={[styles.tabContainer, focused && styles.tabContainerFocused]}
              onPress={() => navigation.navigate('Fale Conosco')}
            >
              <Text style={[styles.tabText, focused && styles.tabTextFocused]}>Fale Conosco</Text>
            </TouchableOpacity>
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Fale Conosco');
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Athletic = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Gallery')}>
          <Ionicons name="image-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <Image source={require('../images/AtleticaImg.png')} style={styles.logo} />

      <AthleticTabs />
    </View>
  );
};

const AthleticStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Athletic" component={Athletic} />
      <Stack.Screen name="Fale Conosco" component={ContactUs} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIcon: {
    width: 30,
    height: 30,
  },
  galleryIcon: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  tabBar: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#F8E40B', 
  },
  tabBarLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Bryndan Write_fix', // Aplicando a fonte aqui
  },
  tabBarIndicator: {
    backgroundColor: '#D52527',
    height: 3,
  },
  tabContainer: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#F8E40B',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  tabContainerFocused: {
    backgroundColor: '#F8E40B',
  },
  tabText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Bryndan Write_fix',
  },
  tabTextFocused: {
    color: '#D52527',
  },
});

export default AthleticStack;
