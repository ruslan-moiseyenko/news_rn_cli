import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NothingFoundIcon from '@/assets/svg/nothingFound.svg';
import { Typography } from '@/components/Typography';

export const NothingFound = () => {
  return (
    <View style={styles.container}>
      <NothingFoundIcon style={styles.image} />
      <Typography>No results found</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
  },
  image: {
    marginBottom: 29,
  },
});
