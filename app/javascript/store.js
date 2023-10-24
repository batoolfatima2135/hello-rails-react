// store.js
import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './redux/greetingSlice';

const store = configureStore({
  reducer: {
     greetings: greetingsReducer,
  },
});

export default store;
