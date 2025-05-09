import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../views/Home';
import Calendar from '../views/Calendar';
import Profile from '../views/Profile';
import Publish from '../views/Publish';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const CustomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Calendário') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Publicar') {
            iconName = focused ? 'megaphone' : 'megaphone-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5D17EB',
        tabBarInactiveTintColor: '#5D17EB',
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Bryndan Write_fix',
          fontSize: 12,
        },
      })}>
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Calendário" component={Calendar} />
      <Tab.Screen name="Publicar" component={Publish} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
};

export default CustomTabNavigator;
