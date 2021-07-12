import React from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import Header from '../../components/header/Header';
import {useAppSelector} from '../../hooks/useReduxHooks';
import currencyFomatter from 'currency-formatter';
import {styles} from './styles';
import CarouselCurrency from '../../components/carouselCurrency/CarouselCurrency';
import useWallet from '../../hooks/useWallet';
import {Colors} from '../../theme/Colors';
import TrendingCrypto from '../../components/trendingCryptocurrencies/TrendingCrypto';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const {name} = useAppSelector((state) => state.auth);
  const {top} = useSafeAreaInsets();

  const {balance, BalanceLoading} = useWallet();

  return (
    <ScrollView
      style={{...styles.scrollContainer, paddingTop: top}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Header />
        <View style={styles.screenContainer}>
          <View style={styles.topContent}>
            <Text style={styles.welcomeTitle}>
              Bienvenido <Text style={styles.usernameText}> {name}</Text>
            </Text>
            <View>
              <Text style={styles.balanceLabel}>Saldo Actual</Text>
              {!BalanceLoading ? (
                <Text style={styles.balanceText}>
                  {currencyFomatter.format(balance, {code: 'USD'})}
                </Text>
              ) : (
                <ActivityIndicator
                  size={30}
                  color={Colors.secondary}
                  style={styles.balanceSpinner}
                />
              )}
            </View>

            <CarouselCurrency />
          </View>
          <View style={styles.content}>
            <TrendingCrypto />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
