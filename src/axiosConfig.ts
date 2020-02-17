import axios from 'axios';

const clientId = '2bec98fcd749aa5';
const axiosInstance = axios.create({
  baseURL: 'https://api.imgur.com/3/',
  headers: {
    Authorization: `Client-ID ${clientId}`,
  },
});

export default axiosInstance;
