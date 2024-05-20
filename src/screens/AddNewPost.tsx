import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import LeftArrow from '@/assets/svg/left_arrow.svg';
import { RoundButton } from '@/components/RoundButton';
import { Typography } from '@/components/Typography';
import { RootStackParamList } from '@/navigation/types';
import { COLORS } from '@/theme/colors';

export type NewsPageProps = NativeStackScreenProps<
  RootStackParamList,
  'AddNewPost'
>;
export const AddNewPost: FC<NewsPageProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <RoundButton icon={LeftArrow} onPress={() => navigation.goBack()} />
        <Typography color={COLORS.BLACK} size={20} style={styles.title}>
          New post
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    padding: 22,
    alignItems: 'center',
  },

  title: {
    flex: 1,
    marginRight: 64,
    textAlign: 'center',
  },
});
