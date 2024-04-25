import { configure } from "@testing-library/react";
import reducer from "./redusers";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { legacy_createStore as createStore } from 'redux';

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, reducer)

//const store = createStore(reducer);
const store = createStore(persistedReducer);
export const persistor = persistStore(store)

export default store;


