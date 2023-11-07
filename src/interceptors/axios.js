import axios from "axios";
import errorHandler from "./ErrorHandler";

const axiosInstance = axios.create({
  baseURL: "localhost:8080",
});

axiosInstance.interceptors.request.use(
  (config) => {
    /*console.info("test");
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }*/
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return errorHandler(error);
  }
);

export default axiosInstance;
