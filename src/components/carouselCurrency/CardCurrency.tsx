import React from 'react';
import {Text, View, Image} from 'react-native';
import {CurrencyType} from '../../interfaces/AppInterfaces';
import currencyFomatter from 'currency-formatter';
import {styles} from './styles';
import {BASE_URL_MEDIA_CURRENCY} from '../../constant/constatsWallet';

interface Props {
  currency: CurrencyType;
}

const CardCurrency = ({currency}: Props) => {
  const uriImage = `${BASE_URL_MEDIA_CURRENCY}${currency.imageUrl}`;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.labelCoinContainer}>
        <Image source={{uri: uriImage}} style={styles.coinImage} />
        <Text style={styles.labelCoin}>{currency.alias}</Text>
      </View>
      <View>
        <Text style={styles.labelBalance}>Tu saldo</Text>
        <Text style={styles.balanceText}>
          {currencyFomatter.format(currency.balance, {code: 'USD'})}
        </Text>
      </View>
    </View>
  );
};

export default CardCurrency;
