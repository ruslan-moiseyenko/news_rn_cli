import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NothingFoundIcon from '@/assets/svg/nothingFound.svg';

export const NothingFound = () => {
  return (
    <View style={styles.container}>
      <NothingFoundIcon />
      <Text>No results found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
  },
});
