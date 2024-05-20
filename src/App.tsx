/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { createContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BootSplash from 'react-native-bootsplash';

import { NavigationContainer } from '@react-navigation/native';

import { useGetData } from '@/hooks/useGetData';
import { RootNavigator } from '@/navigation/RootNavigator';
import { COLORS } from '@/theme/colors';
import { NewsType } from '@/types/general';

interface NewsContextType {
  news: NewsType[] | undefined;
  setNews: (news: NewsType[]) => void;
}

export const NewsContext = createContext<NewsContextType | undefined>(
  undefined,
);

function App(): React.JSX.Element {
  const [news, setNews] = useState<NewsType[]>();
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.info('BootSplash has been hidden successfully');
    });
  }, []);

  const newsDb = useGetData();

  useEffect(() => {
    setNews(newsDb);
  }, [newsDb]);

  return (
    <NewsContext.Provider value={{ news, setNews }}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </NewsContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});

export default App;
