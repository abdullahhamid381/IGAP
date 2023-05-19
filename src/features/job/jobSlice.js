import { createSlice } from '@reduxjs/toolkit'
import { createJob } from './jobActions'

const initialState = {
    loading: false,
    jobs: [],
    error: null,
    success: false,
}

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
  },
  extraReducers: {
    [createJob.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [createJob.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.jobs = [...state.jobs,payload]
    },
    [createJob.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})



export default jobSlice.reducer
