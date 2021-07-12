import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import {useForm} from '../../../hooks/useForm';
import {styles} from './styles';
import TitleSeparator from '../../../components/titleSeparator/TitleSeparator';
import {AppIcons} from '../../../assets/appIcons';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../../../hooks/useAuth';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {logIn, loading} = useAuth();
  const {
    form: {email, password},
    onChange,
    reset,
    errors,
  } = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    logIn({email, password});
  };

  const isDisabled =
    !email || !password || Object.keys(errors).length !== 0 || loading;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Image source={AppIcons.AppIcon} style={styles.logo} />

          <View style={styles.content}>
            <Text style={styles.screenTitle}>Iniciar sesion</Text>
            <View style={styles.formContent}>
              <Input
                value={email}
                name="email"
                placeholder="Email"
                onChange={(text) => onChange(text, 'email')}
                keyboardType="email-address"
                error={errors.email}
                disabled={loading}
              />
              <Input
                value={password}
                name="password"
                placeholder="contraseña"
                secureTextEntry
                onChange={(text) => onChange(text, 'password')}
                error={errors.password}
                disabled={loading}
              />

              <Button
                title="Entrar"
                onPress={() => onSubmit()}
                disabled={isDisabled}
              />
              <Button
                title="Entrar con"
                icon="logo-google"
                outline
                onPress={() => {}}
                disabled={loading}
              />
            </View>

            <TitleSeparator title="O" />

            <Button
              title="Registrate"
              secondary
              onPress={() => {
                navigation.navigate('SignUpScreen');
                reset();
              }}
              disabled={loading}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
