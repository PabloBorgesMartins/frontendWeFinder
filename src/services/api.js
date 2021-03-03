import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'

const api = axios.create({
  baseURL: 'http://10.0.2.2:3335',
});


api.interceptors.request.use(
  async (config) => {
    if (
      !(
        config.url.endsWith('login')
      )
    ) {
      const token = await AsyncStorage.getItem('@WeFinder:token');
      // console.log(`Token API --------------- ${token}`);
      config.headers.Authorization = (token) ? `Bearer ${token}` : '';
    }

    return config;
  }, (error) => {
    // I cand handle a  with errors here
    return Promise.reject(error);
  },
);

export default api;