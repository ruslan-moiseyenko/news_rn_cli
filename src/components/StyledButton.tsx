import React, { FC } from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';

import { PressableOpacity } from '@/components/PressableOpacity';
import { Typography } from '@/components/Typography';
import { COLORS } from '@/theme/colors';

type StyledButtonProps = {
  title: string;
  onPress: () => void;
  variant: 'primary' | 'secondary';
  style?: ViewStyle;
  disabled?: boolean;
};

export const StyledButton: FC<StyledButtonProps> = ({
  disabled = false,
  onPress,
  style,
  variant,
  title,
}) => {
  return (
    <PressableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        variant === 'primary' ? styles.primary : styles.secondary,
        disabled ? styles.disabled : null,
        style,
      ]}>
      <Typography color={COLORS.WHITE} type="bold" size={24}>
        {title}
      </Typography>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 63,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  primary: {
    backgroundColor: COLORS.RED,
  },
  secondary: {
    backgroundColor: COLORS.BLUE,
  },
  disabled: {
    backgroundColor: COLORS.LIGHT_BLUE,
  },
});
