import React from 'react';
import useAuth from '../hooks/useAuth';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const Navigator = () => {
  const {isLogged} = useAuth();
  return !isLogged ? <AuthNavigator /> : <BottomTabNavigator />;
};

export default Navigator;
