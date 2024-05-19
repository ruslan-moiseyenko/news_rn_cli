import React, { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Plus from '@/assets/svg/plus.svg';
import SearchLens from '@/assets/svg/search_lens.svg';
import { RoundButton } from '@/components/RoundButton';
import { COLORS } from '@/theme/colors';

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
        <View style={styles.search}>
          <SearchLens width={24} height={24} />
          <TextInput placeholder={placeholder} placeholderTextColor="#8E949A" />
        </View>
      </View>
      <RoundButton icon={Plus} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  searchWrapper: {
    flex: 1,
    height: 48,
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: COLORS.GRAY_LIGHT,
  },
  search: {
    flexDirection: 'row',
  },
});
