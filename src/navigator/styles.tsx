import {StyleSheet} from 'react-native';
import {Colors} from '../theme/Colors';

export const styles = StyleSheet.create({
  BottomTabNavigatorStyles: {
    backgroundColor: Colors.primary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopWidth: 0,
    elevation: 0,
  },
  BottomTabMaterial: {
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'transparent',
    overflow: 'hidden',
    borderTopWidth: 0,
    elevation: 0,
  },
});
