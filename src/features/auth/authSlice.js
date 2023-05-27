import { createSlice } from '@reduxjs/toolkit'
import { getUserProfile, registerUser, userLogin } from './authActions'

// initialize accessToken from local storage
const accessToken = localStorage.getItem('accessToken')
  ? localStorage.getItem('accessToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  accessToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      console.log('logout')
      localStorage.removeItem('accessToken') // delete token from storage
      localStorage.removeItem('refreshToken') // delete refreshToken from storage
      localStorage.removeItem('user') // delete userInfo from storage
      state.loading = false
      state.userInfo = null
      state.accessToken = null
      state.error = null
      window.location.href = '/' // redirect to Home page
    },
    setCredentials: (state, { payload }) => {
      console.log('setCredentials')
      state.userInfo = payload.data
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload.user
      state.accessToken = payload.accessToken
      state.success = true // login successful

    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload.user
      state.accessToken = payload.accessToken
      state.success = true // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [getUserProfile.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getUserProfile.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
    },
    [getUserProfile.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer
