import React from 'react';
import CurrencyDetailScreen from '../screens/currencyDetail/CurrencyDetailScreen';
import HomeScreen from '../screens/home/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../theme/Colors';

export type HomeStackParams = {
  HomeScreen: undefined;
  CurrencyDetailScreen: {
    currencyID: string;
  };
};

const HomeStack = createStackNavigator<HomeStackParams>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: Colors.primary,
        },
      }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="CurrencyDetailScreen"
        component={CurrencyDetailScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
