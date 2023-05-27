import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import jobReducer from '../features/job/jobSlice'
import categoryReducer from '../features/category/categorySlice'
import bidReducer from '../features/bid/bidSlice'
import myJobReducer from '../features/myJob/myJobSlice'
import { authApi } from './services/auth/authService'


const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    jobs: jobReducer,
    myJobs: myJobReducer,
    category: categoryReducer,
    bid: bidReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

export default store
