import React, {useEffect} from 'react';
import {Text, View, Image, ActivityIndicator} from 'react-native';
import {HomeStackParams} from '../../navigator/HomeStackNavigator';
import currencyFomatter from 'currency-formatter';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import Header from '../../components/header/Header';
import useWallet from '../../hooks/useWallet';
import {BASE_URL_MEDIA_CURRENCY} from '../../constant/constatsWallet';
import {styles} from './styles';
import {Colors} from '../../theme/Colors';
import Button from '../../components/button/Button';
import {useTrendingCoins} from '../../hooks/useTrendingCoins';

interface Props
  extends StackScreenProps<HomeStackParams, 'CurrencyDetailScreen'> {}

const CurrencyDetailScreen = ({route}: Props) => {
  const {top} = useSafeAreaInsets();
  const {currentCurrency, getInfoCurrency, isLoading} = useTrendingCoins();
  const {getCurrencyBalance, BalanceLoading} = useWallet();
  const {currencyID} = route.params;
  const crytoCurrency = getCurrencyBalance(currencyID);

  const uriImage = `${BASE_URL_MEDIA_CURRENCY}${crytoCurrency?.imageUrl}`;

  useEffect(() => {
    if (!currentCurrency && currencyID) {
      getInfoCurrency(currencyID);
    }
  }, [currentCurrency, currencyID]);

  return (
    <View style={{...styles.container, top}}>
      <Header title="Atras" />
      <View style={styles.content}>
        {BalanceLoading && (
          <ActivityIndicator color={Colors.secondary} size={50} />
        )}
        {!BalanceLoading && (
          <>
            <View style={styles.topContent}>
              <Image source={{uri: uriImage}} style={styles.coinImage} />
              <View style={styles.contentMiddle}>
                <Text style={styles.coinLabel}>
                  {crytoCurrency?.name} / {crytoCurrency?.alias}
                </Text>
                <Text style={styles.balanceLabel}>
                  Tu saldo:
                  <Text style={styles.balance}>
                    {currencyFomatter.format(crytoCurrency?.balance || 0, {
                      code: 'USD',
                    })}
                  </Text>
                </Text>
              </View>
            </View>
            {!isLoading && (
              <View style={styles.currentBalanceContainer}>
                <Text style={styles.currentBalanceLabel}>
                  Precio al dia de hoy:
                </Text>
                <Text style={styles.currentBalance}>
                  {currencyFomatter.format(currentCurrency?.PRICE || 0, {
                    code: 'USD',
                  })}
                </Text>
              </View>
            )}
            <View>
              <Button title="Comprar" onPress={() => {}} />
              <Button title="Vender" secondary onPress={() => {}} />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default CurrencyDetailScreen;
