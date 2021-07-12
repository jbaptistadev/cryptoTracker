import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {useTrendingCoins} from '../../hooks/useTrendingCoins';
import {Colors} from '../../theme/Colors';
import CardCurrencyTrending from './CardCurrencyTrending';
import {styles} from './styles';

const TrendingCrypto = () => {
  const {CryptoList, isLoading} = useTrendingCoins();

  const renderItems = () => {
    return CryptoList.map((item) => (
      <CardCurrencyTrending key={item.USD.FROMSYMBOL} currency={item.USD} />
    ));
  };

  return (
    <View style={[styles.container, isLoading && styles.fakeContent]}>
      <Text style={styles.label}>Tendencias</Text>
      {isLoading && <ActivityIndicator size={60} color={Colors.secondary} />}
      {!isLoading && CryptoList.length > 0 && <View>{renderItems()}</View>}
    </View>
  );
};

export default TrendingCrypto;
