import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice';
import currencyReducer from '../features/currency/currencySlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    currency: currencyReducer,
  },
})
