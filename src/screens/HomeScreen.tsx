import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { NothingFound } from '@/components/NothingFound';
import { SearchBar } from '@/components/SearchBar';
import { RootStackParamList } from '@/navigation/types';
import { COLORS } from '@/theme/colors';

export type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: FC<HomePageProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SearchBar onChange={() => {}} onEndEditing={() => {}} />
      <NothingFound />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: COLORS.WHITE,
  },
});
