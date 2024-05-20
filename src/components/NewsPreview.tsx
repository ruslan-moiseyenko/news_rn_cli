import React, { FC, useCallback } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import { PressableOpacity } from '@/components/PressableOpacity';
import { Typography } from '@/components/Typography';
import { COLORS } from '@/theme/colors';
import { NewsType } from '@/types/general';

const blankImage =
  'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=1024x1024&w=is&k=20&c=Bs1RdueQnaAcO888WBIQsC6NvA7aVTzeRVzSd8sJfUg=';

type NewsPreviewProps = {
  news: NewsType;
};

export const NewsPreviewItem: FC<NewsPreviewProps> = ({ news }) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { date, description, title, image } = news;

  const handleNavigation = useCallback(
    () => navigation.navigate('NewsPost', { news }),
    [],
  );
  return (
    <PressableOpacity
      onPress={handleNavigation}
      onLongPress={() => navigation.navigate('Modal')}
      style={[styles.container, styles.inputBoxShadow]}>
      <Image src={!!image ? image : blankImage} style={styles.image} />
      <View style={styles.infoWrapper}>
        <Typography color={COLORS.BLACK} size={20} style={styles.title}>
          {title}
        </Typography>
        <Typography
          color={COLORS.BLACK}
          size={16}
          type="light"
          numberOfLines={1}
          style={styles.title}>
          {description}
        </Typography>
        <Typography color={COLORS.GRAY} size={12} type="extraLight">
          {date}
        </Typography>
      </View>
    </PressableOpacity>
  );
};

export const NewsPreview = React.memo(NewsPreviewItem);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
  },
  inputBoxShadow: {
    ...Platform.select({
      ios: {
        borderColor: 'transparent',
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  image: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  infoWrapper: {
    padding: 18,
  },
  title: {
    marginBottom: 10,
  },
});
