import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import NothingFound from '@/assets/svg/nothingFound.svg';
import { SearchBar } from '@/components/SearchBar';
import { RootStackParamList } from '@/navigation/types';

export type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: FC<HomePageProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <SearchBar />
      <NothingFound />
    </View>
  );
};

const styles = StyleSheet.create({});
