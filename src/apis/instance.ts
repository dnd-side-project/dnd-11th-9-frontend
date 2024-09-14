import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_SERVER_URL,
  withCredentials: true,
});

export default axiosInstance;
