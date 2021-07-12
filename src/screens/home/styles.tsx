import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContent: {
    flex: 0.4,
    paddingHorizontal: 20,
  },
  welcomeTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.06,
  },
  balanceLabel: {
    marginTop: 15,
    color: Colors.white,
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.06,
  },
  balanceText: {
    color: Colors.white,
    fontSize: 29,
    fontWeight: 'bold',
    letterSpacing: 0.06,
  },
  usernameText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  content: {
    flex: 0.8,
    backgroundColor: Colors.greyLite,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    marginTop: 20,
  },
  balanceSpinner: {
    width: '20%',
  },
});
