import React, { FC } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import { Typography } from '@/components/Typography';
import { COLORS } from '@/theme/colors';

type InputWithErrorProps = TextInputProps & {
  errors?: string;
};

export const InputWithError: FC<InputWithErrorProps> = ({
  errors,
  ...props
}) => {
  const { style, ...restProps } = props;
  return (
    <View>
      <TextInput {...restProps} style={[styles.input, style]} />
      {errors && <Typography color={COLORS.RED}>{errors}</Typography>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 17,
    borderRadius: 10,
    backgroundColor: COLORS.GRAY_LIGHT,
  },
});
