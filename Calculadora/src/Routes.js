import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaTemperatura from './pages/TelaTemperatura.js';
import TelaVelocidade from './pages/TelaVelocidade.js'; 

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="TelaTemperatura">
      <Stack.Screen
        name="TelaTemperatura"
        component={TelaTemperatura}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaVelocidade"
        component={TelaVelocidade}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
