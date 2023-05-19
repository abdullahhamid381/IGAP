import axios from "axios";
import urls from "./url";

const save = async (key, value) => {
  //save in local storage
  localStorage.setItem(key, value);
};

const get = async (key) => {
  //get from local storage
  return localStorage.getItem(key);
};

const instance = axios.create({
  baseURL: urls.baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

//Response Interceptor for refreshing token
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await get("refreshToken");
      const res = await instance.post("/auth/RefreshAccessToken", {
        refreshToken: refreshToken,
      });
      if (res.status === 201 || res.status === 200) {
        const accessToken = res.data.accessToken;
        await save("accessToken", accessToken);
        instance.defaults.headers.common["Authorization"] =
          "Bearer " + accessToken;
        return instance(originalRequest);
      } else {
        return Promise.reject(error);
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
