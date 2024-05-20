import React, { FC } from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Formik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import LeftArrow from '@/assets/svg/left_arrow.svg';
import { InputWithError } from '@/components/InputWithError';
import { RoundButton } from '@/components/RoundButton';
import { StyledButton } from '@/components/StyledButton';
import { Typography } from '@/components/Typography';
import { RootStackParamList } from '@/navigation/types';
import { COLORS } from '@/theme/colors';

export type NewsPageProps = NativeStackScreenProps<
  RootStackParamList,
  'AddNewPost'
>;

const validationSchema = z.object({
  title: z.string({ required_error: 'Required' }),
  description: z.string({ required_error: 'Required' }),
});

const initialValues = {
  title: '',
  image: '',
  link: '',
  description: '',
};

export const AddNewPost: FC<NewsPageProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <RoundButton icon={LeftArrow} onPress={() => navigation.goBack()} />
        <Typography color={COLORS.BLACK} size={20} style={styles.title}>
          New post
        </Typography>
      </View>

      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={values => {
          Alert.alert('Data sent');
          console.log(values);
        }}>
        {({
          values,
          errors,
          isValid,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={styles.fromWrapper}>
              <InputWithError
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                placeholder="Title*"
                value={values.title}
                errors={errors.title}
              />

              <InputWithError
                onChangeText={handleChange('image')}
                onBlur={handleBlur('image')}
                placeholder="Image url"
                value={values.image}
                errors={errors.image}
              />
              <InputWithError
                onChangeText={handleChange('link')}
                onBlur={handleBlur('link')}
                placeholder="Link"
                value={values.link}
                errors={errors.link}
              />
              <InputWithError
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                placeholder="Type your message here...*"
                multiline
                value={values.description}
                errors={errors.description}
                style={styles.description}
              />
            </View>
            <StyledButton
              onPress={() => handleSubmit()}
              title="Public"
              variant="secondary"
              style={styles.button}
              disabled={!isValid}
            />
          </KeyboardAvoidingView>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: COLORS.WHITE,
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 22,
    marginBottom: 40,
    alignItems: 'center',
  },

  title: {
    flex: 1,
    marginRight: 60,
    textAlign: 'center',
  },
  fromWrapper: {
    flex: 1,
    gap: 25,
  },
  description: {
    height: 155,
  },
  button: {
    marginBottom: 20,
  },
});
