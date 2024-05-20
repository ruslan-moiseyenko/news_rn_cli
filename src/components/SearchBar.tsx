import React, { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import Plus from '@/assets/svg/plus.svg';
import SearchLens from '@/assets/svg/search_lens.svg';
import { RoundButton } from '@/components/RoundButton';
import { COLORS } from '@/theme/colors';

type SearchBarProps = {
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  onEndEditing: () => {};
};

export const SearchBar: FC<SearchBarProps> = ({
  value,
  placeholder = 'Search',
  onChangeText,
  onEndEditing,
}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <View style={styles.search}>
          <SearchLens width={24} height={24} />
          <TextInput
            allowFontScaling={false}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#8E949A"
            onChangeText={onChangeText}
            onEndEditing={onEndEditing}
            style={styles.text}
          />
        </View>
      </View>
      <RoundButton
        icon={Plus}
        onPress={() => navigation.navigate('AddNewPost')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 40,
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
    alignItems: 'center',
    gap: 5,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    height: '100%',
  },
});
