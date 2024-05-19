import React from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';

export type PressableOpacityProps = PressableProps & {
  activeOpacity?: number;
};

export const PressableOpacity = ({
  children,
  disabled,
  style,
  onPress,
  activeOpacity = 0.4,
  ...props
}: PressableOpacityProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? activeOpacity : 1 },
        style as ViewStyle,
      ]}
      disabled={disabled}
      hitSlop={5}
      onPress={onPress}
      {...props}
    >
      {children}
    </Pressable>
  );
};
