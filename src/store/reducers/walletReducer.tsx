import {
  WalletAction,
  WalletState,
} from '../../interfaces/walletReducerInterface';

const initialState: WalletState = {
  balance: 0,
  id: '',
  userID: '',
  currencyBalances: [],
};

const walletReducer = (
  state = initialState,
  action: WalletAction,
): WalletState => {
  switch (action.type) {
    case 'cleanWallet':
      return initialState;

    case 'setWallet':
      const {userID, id, balance, currencyBalances} = action.payload;
      return {
        currencyBalances,
        userID,
        balance,
        id,
      };

    default:
      return state;
  }
};

export default walletReducer;
