import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: Colors.white,
    height: 60,
    borderRadius: 7,
    paddingHorizontal: 15,
    fontSize: 20,
    marginVertical: 13,
    color: Colors.primary,
  },
  isFocused: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  isActive: {
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  error: {
    borderColor: Colors.red,
    color: Colors.red,
  },
  errorMessage: {
    color: Colors.red,
    fontSize: 13,
    marginTop: -5,
  },
  isDisabled: {
    borderWidth: 1,
    borderColor: Colors.greyLite,
    color: Colors.greyLite,
  },
});
