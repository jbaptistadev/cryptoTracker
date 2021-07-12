import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  titleText: {
    color: Colors.white,
    fontSize: 14,
  },
  cardContainer: {
    marginTop: 8,
    backgroundColor: Colors.white,
    marginRight: 20,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 7,
    width: Dimensions.get('screen').width * 0.26,
    height: Dimensions.get('screen').height * 0.075,
    justifyContent: 'center',
  },
  labelCoinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelCoin: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  labelBalance: {
    fontSize: 10,
    fontWeight: '400',
    color: Colors.primaryLight,
  },
  balanceText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  coinImage: {
    width: 30,
    height: 30,
  },
});
