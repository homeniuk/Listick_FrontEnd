import { configureStore } from '@reduxjs/toolkit';
import listicksReducer from './ListickSlice';

const store = configureStore({
    reducer: {
        listicks: listicksReducer,
    },
  })
  
  export default store