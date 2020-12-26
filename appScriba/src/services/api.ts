import axios from 'axios';
const api = axios.create({
    // baseURL: 'http://10.0.2.2:8081',
    baseURL: 'http://10.0.0.106:3001',
    // baseURL: 'http://110.0.0.106:3001',
});

export default api;
