import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flexDirection: 'row', width: '100%', paddingVertical: 40},
  hairline: {
    backgroundColor: '#818999',
    height: 0.5,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    paddingHorizontal: 15,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
