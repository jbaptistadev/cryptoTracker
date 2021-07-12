import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Header from '../../../components/header/Header';
import Input from '../../../components/input/Input';
import {useForm} from '../../../hooks/useForm';
import Button from '../../../components/button/Button';
import {styles} from './styles';
import useAuth from '../../../hooks/useAuth';

const SignUpScreen = () => {
  const {
    form: {email, password, name, confirmPassword},
    onChange,
    errors,
  } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const {signUp, loading} = useAuth();

  const onSubmit = () => {
    signUp({email, password, name});
  };

  const isDisabled =
    !email ||
    !password ||
    !name ||
    !confirmPassword ||
    Object.keys(errors).length !== 0;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Header title="Iniciar sesion" />

          <View style={styles.content}>
            <Text style={styles.screenTitle}>Bienvenido</Text>
            <View style={styles.formContent}>
              <Input
                value={name}
                name="name"
                placeholder="Nombre"
                onChange={(text) => onChange(text, 'name')}
                error={errors.name}
                disabled={loading}
              />
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

              <Input
                value={confirmPassword}
                name="confirmPassword"
                placeholder="Confirmar contraseña"
                secureTextEntry
                onChange={(text) => onChange(text, 'confirmPassword')}
                error={errors.confirmPassword}
                disabled={loading}
              />

              <Button
                title="Registrar"
                onPress={() => onSubmit()}
                disabled={isDisabled || loading}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
