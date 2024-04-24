import reducer from "./redusers";

import { legacy_createStore as createStore } from 'redux';

const store = createStore(reducer);

export default store;


