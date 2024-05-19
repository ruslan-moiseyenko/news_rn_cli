import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { NewsPreview } from '@/components/NewsPreview';
import { NothingFound } from '@/components/NothingFound';
import { SearchBar } from '@/components/SearchBar';
import { RootStackParamList } from '@/navigation/types';
import { COLORS } from '@/theme/colors';
import { NewsType } from '@/types/general';

export type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const initialDb = [
  {
    id: 1,
    image: './src/assets/images/news_cover.jpg',
    title: 'New Tech Innovation in Silicon Valley',
    description:
      'Silicon Valley is buzzing with a new technological innovation set to change the industry. This breakthrough promises to bring significant advancements in various sectors including AI, machine learning, and data analytics. Companies are eagerly integrating this new tech into their operations, hoping to gain a competitive edge. The innovation is expected to create numerous job opportunities and drive economic growth in the region. Experts believe it will set a new standard for future technological developments.',
    date: 'Sunday, 9 May 2021',
  },
];

export const HomeScreen: FC<HomePageProps> = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState('');
  const [newsDb, setNewsDb] = useState<NewsType[]>(initialDb);

  useEffect(() => {
    (async () => {
      try {
        const newsDB = await require('@/data/news.json');
        if (newsDB) setNewsDb(newsDB);
      } catch (error) {
        console.log('Error during receiving data', error);
      }
    })();
  }, []);

  const handleSearch = async () => {};
  return (
    <View style={styles.container}>
      <SearchBar
        value={searchValue}
        onChangeText={setSearchValue}
        onEndEditing={handleSearch}
      />
      <NewsPreview news={newsDb[0]} onPress={() => {}} />
      {/* <NothingFound /> */}
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
