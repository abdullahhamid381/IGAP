// import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../../api/axios";
import { errorHandler } from '../../erroHandler';

const backendURL = 'https://auth.payhero.co.ke/'

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        '/auth/login',
        { email, password },
        config
      )

      // store user's token in local storage
      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
      console.log(data)
      return data
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
)

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ name, email, password, interests, role, phoneNo }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const {data} = await axios.post(
        '/auth/signup',
        { name, email, password, interests, role, phoneNo },
        config
      )
      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)

      console.log(data)


    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
)
