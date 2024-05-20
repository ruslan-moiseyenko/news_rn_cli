import React, { FC } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { NewsPreview } from '@/components/NewsPreview';
import { NewsType } from '@/types/general';

type NewsPreviewListProps = {
  data: NewsType[];
};

export const NewsPreviewList: FC<NewsPreviewListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <NewsPreview news={item} />}
      keyExtractor={item => String(item.id)}
      initialNumToRender={3}
      contentContainerStyle={{ gap: 40 }}
    />
  );
};

const styles = StyleSheet.create({});
