import React, { FC, useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { NewsContext } from '@/App';
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
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error('NewsContext must be used within a NewsProvider');
  }

  const { news, setNews } = context;

  useEffect(() => {
    setFilteredNews(news || []);
  }, [news]);

  const handleSearch = async () => {
    if (!searchValue.trim()) {
      setFilteredNews(news || []);
    } else {
      setFilteredNews(
        news?.filter(
          item =>
            item.description.includes(searchValue) ||
            item.title.includes(searchValue),
        ) || [],
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
