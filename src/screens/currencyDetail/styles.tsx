import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topContent: {
    alignItems: 'center',
  },
  contentMiddle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinImage: {
    width: 120,
    height: 120,
    marginHorizontal: 20,
  },
  coinLabel: {
    fontSize: 17,
    fontWeight: '800',
    color: Colors.secondary,
    marginBottom: 10,
  },
  balance: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  balanceLabel: {
    fontSize: 13,
    color: Colors.greyMedium,
    fontWeight: 'bold',
  },
  currentBalanceContainer: {
    paddingVertical: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  currentBalanceLabel: {
    fontSize: 20,
    color: Colors.greyMedium,
    fontWeight: 'bold',
  },
  currentBalance: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
