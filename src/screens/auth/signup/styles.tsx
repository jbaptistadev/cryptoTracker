import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../../theme/Colors';

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.greyLite,
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  screenTitle: {
    color: Colors.primary,
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  formContent: {
    marginTop: 18,
  },
});
