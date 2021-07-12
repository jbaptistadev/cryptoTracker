import React from 'react';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import TransactionsHistoryScreen from '../screens/transactionsHistory/TransactionsHistoryScreen';
import {Colors} from '../theme/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';

const BottomTabAndroid = createMaterialBottomTabNavigator();

const BottomTabAndroidNavigator = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={styles.BottomTabMaterial}
      labeled={false}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Home':
              iconName = 'home-sharp';
              break;
            case 'TransactionsHistoryScreen':
              iconName = 'reader-outline';
              break;

            default:
              break;
          }
          return <Icon name={iconName} color={color} size={20} />;
        },
      })}>
      <BottomTabIOS.Screen name="Home" component={HomeStackNavigator} />
      <BottomTabIOS.Screen
        name="TransactionsHistoryScreen"
        component={TransactionsHistoryScreen}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const BottomTabIOSNavigator = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Home':
              iconName = 'home-sharp';
              break;
            case 'TransactionsHistoryScreen':
              iconName = 'reader-outline';
              break;

            default:
              break;
          }
          return <Icon name={iconName} color={color} size={20} />;
        },
      })}
      sceneContainerStyle={{
        backgroundColor: Colors.primary,
      }}
      tabBarOptions={{
        activeTintColor: Colors.white,
        style: styles.BottomTabNavigatorStyles,
        showLabel: false,
      }}>
      <BottomTabIOS.Screen name="Home" component={HomeStackNavigator} />
      <BottomTabIOS.Screen
        name="TransactionsHistoryScreen"
        component={TransactionsHistoryScreen}
      />
    </BottomTabIOS.Navigator>
  );
};

export default () =>
  Platform.OS === 'android' ? (
    <BottomTabAndroidNavigator />
  ) : (
    <BottomTabIOSNavigator />
  );
