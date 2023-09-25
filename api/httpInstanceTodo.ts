import axios from 'axios';

const SERVER_URL = 'https://www.pre-onboarding-selection-task.shop';

const baseHeader = {
  baseURL: SERVER_URL,
};

const httpInstance = axios.create(baseHeader);

httpInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    const newConfig = config;
    newConfig.headers.Authorization = `Bearer ${accessToken}`;
    return newConfig;
  }
  return config;
});

export default httpInstance;
