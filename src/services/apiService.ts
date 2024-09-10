import { message } from 'antd';
import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://some-domain.com/api/',
});

apiService.interceptors.request.use(
  function (config) {
    const xAuthToken = localStorage.getItem('xAuthToken');
    if (xAuthToken) {
      config.headers['x-auth-token'] = xAuthToken;
    }
    return config;
  },
  function (error) {
    console.log({ error });
    message.error("مشکلی در ارسال درخواست به وجود آمده.")
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log({ error });
    message.error('درخواست شما با خطا مواجه شد.');
    return Promise.reject(error);
  }
);

export { apiService };
