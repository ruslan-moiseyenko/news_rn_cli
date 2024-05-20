import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '@/navigation/types';
import { AddNewPost } from '@/screens/AddNewPost';
import { HomeScreen } from '@/screens/HomeScreen';
import { NewsPostScreen } from '@/screens/NewsPostScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewsPost" component={NewsPostScreen} />
      <Stack.Screen name="AddNewPost" component={AddNewPost} />
    </Stack.Navigator>
  );
}
