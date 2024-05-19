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
    />
  );
};

const styles = StyleSheet.create({});
