import { message } from 'antd';
import axios from 'axios';
import { PATH_AUTH } from '../constants';

const apiService = axios.create({
  baseURL: 'http://37.32.27.22/api',
});

apiService.interceptors.request.use(
  function (config) {
    const xAuthToken = localStorage.getItem('xAuthToken');
    if (xAuthToken) {
      config.headers['Authorization'] = xAuthToken;
    }
    return config;
  },
  function (error) {
    console.log({ error });
    message.error('مشکلی در ارسال درخواست به وجود آمده.');
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { status } = error.response;
    if (status === 401) {
      // window.location.replace(PATH_AUTH.signin);
      message.error('نشست شما منقضی شد.');
      return Promise.reject(error);
    }

    message.error('درخواست شما با خطا مواجه شد.');
    return Promise.reject(error);
  }
);

export { apiService };
