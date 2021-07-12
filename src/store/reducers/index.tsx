import {combineReducers} from 'redux';
import authReducer from './authReducer';
import walletReducer from './walletReducer';

export default combineReducers({
  auth: authReducer,
  wallet: walletReducer,
});
