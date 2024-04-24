//import {legacy_createStore as createStore, compose, applyMiddleware} from "redux"
import reducer from "./redusers";

import { legacy_createStore as createStore } from 'redux';

const store = createStore(reducer);

export default store;

/*
const configureStore = preloadedState => createStore(
    reducer,
);

const store = configureStore();

export default store;*/

