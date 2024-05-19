import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { PressableOpacity } from '@/components/PressableOpacity';
import { COLORS } from '@/theme/colors';

type RoundButtonProps = {
  icon: FC<SvgProps>;
  onPress?: () => void;
};

export const RoundButton: FC<RoundButtonProps> = ({ icon: Icon, onPress }) => {
  return (
    <PressableOpacity onPress={onPress} style={styles.button}>
      <Icon />
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 47,
    height: 47,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GRAY_LIGHT,
  },
});
