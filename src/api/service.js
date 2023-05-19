
import axios from "./axios";

export const signup = async (data) => {
  try{
    const response = await axios.post("/auth/signup", data);
    return response.data;

  }catch(err){
    return err.response;
  }
}

export const login = async (data) => {
  try{
    const response = await axios.post("/auth/login", data);
    return response.data;

  }catch(err){
    return err.response;
  }
}


export const createJob = async (data) => {
  try{
    const response = await axios.post("/jobs", data);
    return response.data;
  }catch(err){
    return err.response;
  }
}