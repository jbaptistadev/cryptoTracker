import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fakeContent: {
    height: 600,
  },
  label: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderRadius: 6,
    marginBottom: 18,
    paddingHorizontal: 19,
    paddingVertical: 5,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  coinImage: {
    height: 40,
    width: 40,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cryptoName: {
    fontSize: 12,
    fontWeight: '600',
  },
  textBalance: {
    fontWeight: 'bold',
  },
});
