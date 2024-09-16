import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_SERVER_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use((response) => {
  return response;
});

export default axiosInstance;
