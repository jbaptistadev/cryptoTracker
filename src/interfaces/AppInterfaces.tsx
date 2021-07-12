import {store} from '../store';

export interface CurrencyType {
  imageUrl: string;
  balance: number;
  alias: string;
  name: string;
}

export interface WalletUser {
  id: string;
  userID: string;
  balance: number;
  currencyBalances: CurrencyType[];
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
