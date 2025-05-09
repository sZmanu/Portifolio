import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ContactUsDA from '../views/ContactUs';
import Membros from './MembrosDA';
import Informations from './Informations';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const DATabs = () => {
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
        name="Membros"
        component={Membros}
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={[styles.tabContainer, focused && styles.tabContainerFocused]}>
              <Text style={[styles.tabText, focused && styles.tabTextFocused]}>Membros</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Informacao"
        component={Informations}
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={[styles.tabContainer, focused && styles.tabContainerFocused]}>
              <Text style={[styles.tabText, focused && styles.tabTextFocused]}>Informações</Text>
            </View>
          ),
        }}
      />
     
      <Tab.Screen
        name="ContactUsDA"
        component={() => null}
        options={{
          tabBarLabel: ({ focused }) => (
            <TouchableOpacity
              style={[styles.tabContainer, focused && styles.tabContainerFocused]}
              onPress={() => navigation.navigate('ContactUsDA')}
            >
              <Text style={[styles.tabText, focused && styles.tabTextFocused]}>Fale Conosco</Text>
            </TouchableOpacity>
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('ContactUsDA');
          },
        }}
      />
    </Tab.Navigator>
  );
};

const DA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
        <Icon name='arrowleft' type='ant-design' color={'#5D17EB'} size={27}/>
        </TouchableOpacity>
      </View>

      <Image source={require('../images/logoLogin.png')} style={styles.logo} />

      <DATabs />
    </View>
  );
};

const DAStack= () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DA" component={DA} />
      <Stack.Screen name="Fale Conosco" component={ContactUsDA} />
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
    top: 10,
    backgroundColor: 'white',
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIcon: {
    width: 40,
    height: 40,
    tintColor: '#5D17EB'
  },
  galleryIcon: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  tabBar: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
  },
  tabBarLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabBarIndicator: {
    backgroundColor: '#F3C04D',
    height: 3,
  },
  tabContainer: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#5D17EB',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  tabContainerFocused: {
    backgroundColor: '#5D17EB',
  },
  tabText: {
    color: '#F3C04D',
    fontSize: 14,
    fontFamily:'Bryndan Write_fix', 
  },
  tabTextFocused: {
    color: '#F3C04D',
    fontFamily:'Bryndan Write_fix', 
  },

  
});

export default DAStack;
