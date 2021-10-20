import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  status: 'idle',
}

export const currenciesToSlice = createSlice({
  name: 'currenciesTo',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { set } = currenciesToSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCurrenciesTo = (state) => state.currenciesTo.value

export default currenciesToSlice.reducer
