import React from 'react';
import {
  ColorValue,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';

import { COLORS } from '@/theme/colors';
import { capitalizeFirstLetter } from '@/utils/formatter';

export type FontType = 'bold' | 'semiBold' | 'regular' | 'light' | 'extraLight';

type TypographyProps = TextProps & {
  color?: ColorValue;
  size?: number;
  type?: FontType;
  italic?: boolean;
  children:
    | string
    | string[]
    | Element
    | Element[]
    | React.ReactNode
    | React.ReactNode[];
  capitalize?: boolean;
  uppercase?: boolean;
  style?: TextStyle;
};

export const Typography = ({
  color = COLORS.GRAY,
  type = 'regular',
  italic = false,
  uppercase = false,
  capitalize = false,
  size = 16,
  children,
  style = {},
  ...restNativeProps
}: TypographyProps) => {
  const fontFamily = `Roboto-${capitalizeFirstLetter(type)}${
    italic ? 'Italic' : ''
  }`;
  return (
    <Text
      style={[
        { fontFamily, color, fontSize: size },
        uppercase && styles.uppercase,
        capitalize && styles.capitalize,
        style,
      ]}
      {...restNativeProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  uppercase: {
    textTransform: 'uppercase',
  },
  capitalize: { textTransform: 'capitalize' },
});
