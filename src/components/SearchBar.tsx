import React, { FC } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import SearchLens from '@/assets/svg/search_lens.svg';

type SearchBarProps = {
  placeholder?: string;
  onChange: () => void;
  onEndEditing: () => void;
};

export const SearchBar: FC<SearchBarProps> = ({
  placeholder = 'Search',
  onChange,
  onEndEditing,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <SearchLens width={24} height={24} />
        <TextInput placeholder={placeholder} placeholderTextColor="#8E949A" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: '100%',
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#A4A9AE',
  },
  searchWrapper: {
    flexDirection: 'row',
  },
});
