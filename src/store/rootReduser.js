import { combineReducers } from '@reduxjs/toolkit';
import listicksReducer from './ListickSlice';
import usersReducer from './UserSlice';

const rootReducer = combineReducers({
    listicks: listicksReducer,
    user: usersReducer,
  });
  
export default rootReducer;