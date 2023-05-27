// import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../../api/axios";
import { errorHandler } from '../../erroHandler';
import { toast } from 'react-toastify';


export const createJob = createAsyncThunk(
  'job/create',
  async ({title,files,description,requestedDays,category,subCategory,requestedBudget}, { rejectWithValue }) => {
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
        {title,description,files,requestedDays,category,subCategory,requestedBudget},
        config
      )
      toast.success('Job created successfully')
      return data
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
)

export const getJobs = createAsyncThunk(
  'job/getJobs',
  async (_, { rejectWithValue }) => {
    try{

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
      }

      const res = await axios.get('/jobs',config)
      return res.data.data

    }catch(err){
      let error = errorHandler(err);
      return rejectWithValue(error)
    }

  })

export const getJobById = createAsyncThunk(
  'job/getJobById',
  async (id, { rejectWithValue }) => {
    try{

      let config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
      }
      const res = await axios.get(`/jobs/job/${id}`,config)
      return res.data

    }catch(err){
      let error = errorHandler(err);
      return rejectWithValue(error)
    }
  })

    


