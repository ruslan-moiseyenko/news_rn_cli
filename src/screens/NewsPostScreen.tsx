import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';

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
const blankImage =
  'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=1024x1024&w=is&k=20&c=Bs1RdueQnaAcO888WBIQsC6NvA7aVTzeRVzSd8sJfUg=';

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
        <Image src={!!image ? image : blankImage} style={styles.image} />
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
    width: '100%',
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
