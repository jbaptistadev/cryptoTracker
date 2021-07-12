import {useEffect, useState} from 'react';
import useAuth from './useAuth';
import useFirebase from './useFirebase';
import {WalletUser} from '../interfaces/AppInterfaces';
import {useAppDispatch, useAppSelector} from './useReduxHooks';

const useWallet = () => {
  const {firestore} = useFirebase();
  const dispatch = useAppDispatch();
  const {balance, currencyBalances} = useAppSelector((state) => state.wallet);
  const [BalanceLoading, setBalanceLoading] = useState(true);
  const {id: userID} = useAuth();

  const getBalance = async (id: string) => {
    setBalanceLoading(true);
    try {
      let collection: WalletUser[] = [];
      const walletSnapShot = await firestore
        .collection('wallet')
        .where('userID', '==', id)
        .get();

      walletSnapShot.forEach((doc) => {
        collection.push({
          id: doc.id,
          ...doc.data(),
        } as WalletUser);
      });

      dispatch({type: 'setWallet', payload: {...collection[0]}});
    } catch (error) {
      console.log({error});
    } finally {
      setBalanceLoading(false);
    }
  };

  const getCurrencyBalance = (currency: string) => {
    return currencyBalances.find((item) => item.alias === currency);
  };

  useEffect(() => {
    if (userID) {
      getBalance(userID);
    }
  }, []);

  return {
    balance,
    getCurrencyBalance,
    BalanceLoading,
  };
};

export default useWallet;
