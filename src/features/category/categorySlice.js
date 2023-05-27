import { createSlice } from '@reduxjs/toolkit'
import { getCategory } from './categoryActions'

const initialState = {
    loading: false,
    category: [],
    error: null,
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getCategory.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getCategory.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.category = payload
    },
    [getCategory.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})


//write selectors here



export default categorySlice.reducer
