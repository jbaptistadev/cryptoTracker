import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useAppSelector} from '../../hooks/useReduxHooks';
import CardCurrency from './CardCurrency';
import {styles} from './styles';

const CarouselCurrency = () => {
  const CurrencyBalances = useAppSelector(
    (state) => state.wallet.currencyBalances,
  );

  if (CurrencyBalances.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Portafolio</Text>
      <FlatList
        data={CurrencyBalances}
        keyExtractor={(item) => item.alias.toString()}
        renderItem={({item}: any) => <CardCurrency currency={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CarouselCurrency;
