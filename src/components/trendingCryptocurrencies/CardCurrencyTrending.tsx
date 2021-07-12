import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {BASE_URL_MEDIA_CURRENCY} from '../../constant/constatsWallet';
import {Usd} from '../../interfaces/apiCurrencyTrendingInterface';
import {styles} from './styles';
import currencyFomatter from 'currency-formatter';
import {useNavigation} from '@react-navigation/native';

interface Props {
  currency: Usd;
}

const CardCurrencyTrending = ({currency}: Props) => {
  const navigation = useNavigation();
  const uriImage = `${BASE_URL_MEDIA_CURRENCY}${currency.IMAGEURL}`;
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate('CurrencyDetailScreen', {
          currencyID: currency.FROMSYMBOL,
        })
      }>
      <View style={styles.leftContent}>
        <Image source={{uri: uriImage}} style={styles.coinImage} />
        <Text style={styles.cryptoName}>{currency.FROMSYMBOL}</Text>
      </View>

      <Text style={styles.textBalance}>
        {currencyFomatter.format(currency.PRICE, {code: 'USD'})}
      </Text>
    </TouchableOpacity>
  );
};

export default CardCurrencyTrending;
