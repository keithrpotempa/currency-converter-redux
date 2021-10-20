import { configureStore } from '@reduxjs/toolkit'
import currencyListReducer from '../features/currency/currencyListSlice'
import currencyFromReducer from '../features/currency/currencyFromSlice'
import currenciesToReducer from '../features/currency/currenciesToSlice'
import conversionRatesReducer from '../features/currency/conversionRatesSlice'
import valueFromReducer from '../features/currency/valueFromSlice'

export const store = configureStore({
  reducer: {
    conversionRates: conversionRatesReducer,
    currencyFrom: currencyFromReducer,
    currenciesTo: currenciesToReducer,
    currencyList: currencyListReducer,
    valueFrom: valueFromReducer,
  },
})
