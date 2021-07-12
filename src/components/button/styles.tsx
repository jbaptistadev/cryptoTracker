import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: 60,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
    flexDirection: 'row',
  },
  secondaryContainer: {
    backgroundColor: Colors.secondary,
  },
  secondaryText: {
    color: Colors.primary,
  },
  title: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  iconContainer: {
    marginLeft: 10,
  },
  outlineContainer: {
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  outlineText: {
    color: Colors.primary,
  },
  disabledContainer: {
    backgroundColor: Colors.greyMedium,
  },
});
