import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../components/header/Header';
import {styles} from './styles';

const TransactionsHistoryScreen = () => {
  const transactions = [];
  const {top} = useSafeAreaInsets();
  return (
    <View style={{...styles.container, paddingTop: top}}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Transacciones</Text>

        {transactions.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No hay transacciones disponibles
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default TransactionsHistoryScreen;
