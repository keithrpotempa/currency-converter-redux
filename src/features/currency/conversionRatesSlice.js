import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchConversionRate } from './currencyApi'

const initialState = {
  value: {},
  status: 'idle',
}

export const getConversionRatesAsync = createAsyncThunk('currency/fetchConversionRates', async (conversionId) => {
  const response = await fetchConversionRate(conversionId)
  return response
})

export const conversionRatesSlice = createSlice({
  name: 'conversionRates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getConversionRatesAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getConversionRatesAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        // breaking apart the payload and saving it in state
        for (const [key, value] of Object.entries(action.payload)) {
          state.value[key] = value
        }
      })
  },
})

export const selectConversionRates = (state) => state.conversionRates.value

export default conversionRatesSlice.reducer
