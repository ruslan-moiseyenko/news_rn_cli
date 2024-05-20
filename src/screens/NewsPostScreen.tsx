import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import LeftArrow from '@/assets/svg/left_arrow.svg';
import { RoundButton } from '@/components/RoundButton';
import { Typography } from '@/components/Typography';
import { RootStackParamList } from '@/navigation/types';
import { COLORS } from '@/theme/colors';
import { NewsType } from '@/types/general';

export type NewsPostScreenProps = {
  news: NewsType;
};
export type NewsPageProps = NativeStackScreenProps<
  RootStackParamList,
  'NewsPost'
>;

export const NewsPostScreen: FC<NewsPageProps> = ({ navigation, route }) => {
  const {
    news: { date, description, image, title },
  } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.button}>
          <RoundButton icon={LeftArrow} onPress={() => navigation.goBack()} />
        </View>
        <Typography color={COLORS.BLACK} size={20} style={styles.title}>
          {title}
        </Typography>
      </View>
      <View style={styles.main}>
        <Image
          source={require('@/assets/images/newsImage.png')}
          style={styles.image}
        />
        <View style={styles.infoWrapper}>
          <Typography type="light" size={12}>
            {date}
          </Typography>
          <Typography type="light" color={COLORS.BLACK}>
            {description}
          </Typography>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    overflow: 'hidden',
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    padding: 22,
    alignItems: 'center',
  },
  button: {
    marginRight: 10,
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 54,
    textAlign: 'center',
  },
  main: {
    alignItems: 'center',
  },
  image: {
    height: '75%',
  },
  infoWrapper: {
    position: 'absolute',
    marginTop: '65%',
    padding: 30,
    gap: 15,
    borderRadius: 46,
    backgroundColor: COLORS.WHITE,
  },
});
