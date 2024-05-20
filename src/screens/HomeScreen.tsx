import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { NewsPreviewList } from '@/components/NewsPreviewList';
import { NothingFound } from '@/components/NothingFound';
import { SearchBar } from '@/components/SearchBar';
import { useGetData } from '@/hooks/useGetData';
import { RootStackParamList } from '@/navigation/types';
import { COLORS } from '@/theme/colors';
import { NewsType } from '@/types/general';

export type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: FC<HomePageProps> = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredNews, setFilteredNews] = useState<NewsType[]>([]);

  const newsDb = useGetData();

  useEffect(() => {
    setFilteredNews(newsDb);
  }, [newsDb]);

  const handleSearch = async () => {
    if (!searchValue.trim()) {
      setFilteredNews(newsDb);
    } else {
      setFilteredNews(
        newsDb.filter(
          item =>
            item.description.includes(searchValue) ||
            item.title.includes(searchValue),
        ),
      );
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchValue}
        onChangeText={setSearchValue}
        onEndEditing={handleSearch}
      />
      {!!filteredNews?.length ? (
        <NewsPreviewList data={filteredNews} />
      ) : (
        <NothingFound />
      )}
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
