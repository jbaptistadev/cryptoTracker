import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  gotoBackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 18,
  },
  logoutIconContainer: {
    alignSelf: 'flex-end',
  },
});
