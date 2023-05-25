import { createSlice } from '@reduxjs/toolkit'
import { createJob, getJobById, getJobs } from './jobActions'

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
    [getJobs.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getJobs.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.jobs = [...state.jobs,payload]
    },
    [getJobs.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [getJobById.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getJobById.fulfilled]: (state, { payload }) => {
      state.loading = false
      //not sure if this is the best way to do this but i am not sure how to update the state in regrads to the id
    },
    [getJobById.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})


//write selectors here



export default jobSlice.reducer
