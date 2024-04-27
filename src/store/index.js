import { configureStore, combineReducers } from '@reduxjs/toolkit';
import listicksReducer from './ListickSlice';

import { persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['listicks'],
}

const rootReducer = combineReducers({
    listicks: listicksReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);    //for 'redux-persist'

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],    //for 'redux-persist'
      },
    }),
  })

export const persistor = persistStore(store); 
export default store