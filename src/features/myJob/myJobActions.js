import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorHandler } from "../../erroHandler";
import axios from "../../api/axios";

export const getMyJobs = createAsyncThunk(
  "myJob/getMyJobs",
  async (_, { rejectWithValue }) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };

      const res = await axios.get("/jobs/myJobs", config);

      
      return res.data.data;
    } catch (err) {
      let error = errorHandler(err);
      return rejectWithValue(error);
    }
  }
);
