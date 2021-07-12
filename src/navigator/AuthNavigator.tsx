import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/auth/login/LoginScreen';
import {Colors} from '../theme/Colors';
import SignUpScreen from '../screens/auth/signup/SignUpScreen';
export type AuthStackParams = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

const AuthStack = createStackNavigator<AuthStackParams>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: Colors.primary,
        },
      }}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
