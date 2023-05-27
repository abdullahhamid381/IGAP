import { createSlice } from '@reduxjs/toolkit'
import { createBid, getMyBids } from './bidActions'

const initialState = {
    loading: false,
    bids: [],
    error: null,
}

const categorySlice = createSlice({
  name: 'bids',
  initialState,
  reducers: {
  },
  extraReducers: {
    [createBid.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [createBid.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.bids = [...state.bids,payload]
    },
    [createBid.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [getMyBids.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getMyBids.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.bids = [...state.bids,...payload]
    },
    [getMyBids.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})


//write selectors here



export default categorySlice.reducer
