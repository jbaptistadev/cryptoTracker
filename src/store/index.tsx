import {applyMiddleware, createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootReducer from './reducers';
import {persistReducer, persistStore} from 'redux-persist';
import logger from './middleware/logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'wallet'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
export const store = createStore(persistedReducer, applyMiddleware(logger));
export default () => {
  let persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
