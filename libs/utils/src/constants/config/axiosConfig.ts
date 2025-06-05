import { AxiosRequestConfig } from 'axios';

const API_DEFAULT_TIMEOUT = 30; // seconds

/**
 * Axios configuration for application
 */
const axiosConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000 * API_DEFAULT_TIMEOUT, // millseconds
};

export default axiosConfig;
