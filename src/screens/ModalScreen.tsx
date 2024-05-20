import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import Line from '@/assets/svg/line.svg';
import { StyledButton } from '@/components/StyledButton';
import { COLORS } from '@/theme/colors';

export const ModalScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
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
        <StyledButton onPress={() => {}} title="Delete" variant="primary" />
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
