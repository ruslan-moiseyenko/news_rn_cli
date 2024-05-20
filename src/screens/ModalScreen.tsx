import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { NewsContext } from '@/App';
import Line from '@/assets/svg/line.svg';
import { StyledButton } from '@/components/StyledButton';
import { RootStackParamList } from '@/navigation/types';
import { COLORS } from '@/theme/colors';

export type ModalScreenType = {
  id: string;
};
export type ModalScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Modal'
>;

export const ModalScreen: FC<ModalScreenProps> = ({ navigation, route }) => {
  const context = useContext(NewsContext);
  const { id } = route.params;

  if (!context) {
    throw new Error('NewsContext must be used within a NewsProvider');
  }

  const { news, setNews } = context;

  const handleDelete = () => {
    setNews(news?.filter(item => item.id !== id) || []);
    navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.BACKDROP,
      }}>
      <View style={styles.main}>
        <Line style={styles.line} />
        <StyledButton onPress={handleDelete} title="Delete" variant="primary" />
        <StyledButton
          onPress={() => navigation.goBack()}
          title="Close"
          variant="secondary"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 33,
    paddingTop: 16,
    paddingBottom: 50,
    marginTop: 'auto',
    gap: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  line: {
    marginBottom: 35,
  },
});
