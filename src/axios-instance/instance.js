import axios from 'axios';
const BASE_URL = process.env.REACT_APP_NOT_SECRET_CODE;
export const axios_instace = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
  });

/**
 * As we need to pass api key in each call 
 * keeping placeholder in interceptor
 * for api key
 */
  axios_instace.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios_instace.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });