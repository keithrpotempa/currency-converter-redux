import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [''],
  status: 'idle',
}

export const currenciesToSlice = createSlice({
  name: 'currenciesTo',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
    setByIndex: (state, action) => {
      const { index, value } = action.payload
      state.value[index] = value
    },
    push: (state, action) => {
      state.value.push(action.payload)
    },
  },
})

export const { set, setByIndex, push } = currenciesToSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCurrenciesTo = (state) => state.currenciesTo.value

export default currenciesToSlice.reducer
