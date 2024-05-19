import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '@/navigation/types';
import { HomeScreen } from '@/screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
