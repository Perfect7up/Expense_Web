import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './actions/auth';

const persistConfig = {
  key: 'root',
  storage,
  version: 1
};

const rootReducer = combineReducers({
  auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
