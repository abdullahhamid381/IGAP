// import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../../api/axios";
import { errorHandler } from '../../erroHandler';


export const createJob = createAsyncThunk(
  'job/create',
  async ({title,description,budget,category,subCategory,days}, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
      }

      const { data } = await axios.post(
        '/jobs',
        {title,description,budget,category,subCategory,days},
        config
      )

        console.log(data)
      return data
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
)

