import React, { FC, useContext, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';

import { NewsContext } from '@/App';
import { fetchData } from '@/api/fetchData';
import { NewsPreview } from '@/components/NewsPreview';
import { NewsType } from '@/types/general';

type NewsPreviewListProps = {
  data: NewsType[];
};

export const NewsPreviewList: FC<NewsPreviewListProps> = ({ data }) => {
  const [refreshing, setRefreshing] = useState(false);

  const context = useContext(NewsContext);

  if (!context) {
    throw new Error('NewsContext must be used within a NewsProvider');
  }

  const { setNews } = context;

  const handleRefresh = async () => {
    try {
      setRefreshing(true);
      const response = await fetchData();
      setNews(response);
      setRefreshing(false);
    } catch (error) {
      console.error('Error: ', error);
      setRefreshing(false);
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <NewsPreview news={item} />}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ gap: 40 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({});
