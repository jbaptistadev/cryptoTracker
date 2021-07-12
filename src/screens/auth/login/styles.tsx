import {StyleSheet} from 'react-native';
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
  logo: {
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  content: {
    flex: 0.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.greyLite,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: 'center',
  },
  screenTitle: {
    color: Colors.primary,
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  formContent: {
    marginTop: 18,
  },
});
