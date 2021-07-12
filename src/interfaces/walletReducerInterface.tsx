import {CurrencyType} from './AppInterfaces';

export interface WalletState {
  balance: number;
  userID: string;
  id: string;
  currencyBalances: CurrencyType[];
}

export type SetWallet = {
  balance: number;
  userID: string;
  id: string;
  currencyBalances: CurrencyType[];
};

export type WalletAction =
  | {type: 'cleanWallet'}
  | {type: 'setWallet'; payload: SetWallet};
