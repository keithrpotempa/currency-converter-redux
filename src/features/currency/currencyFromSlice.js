import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  status: 'idle',
}

export const currencyFromSlice = createSlice({
  name: 'currencyFrom',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { set } = currencyFromSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCurrencyFrom = (state) => state.currencyFrom.value

export default currencyFromSlice.reducer
