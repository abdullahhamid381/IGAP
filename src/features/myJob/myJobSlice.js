import { createSlice } from '@reduxjs/toolkit'
import { getMyJobs } from './myJobActions'

const initialState = {
    loading: false,
    jobs: [],
    error: null,
    success: false,
}

const myJobSlice = createSlice({
  name: 'myJobs',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getMyJobs.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getMyJobs.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.jobs = [...state.jobs,...payload]
    },
    [getMyJobs.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    }
  },
})


//write selectors here



export default myJobSlice.reducer
