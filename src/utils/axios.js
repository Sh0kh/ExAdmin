import axios from 'axios';

axios.defaults.baseURL = 'https://maktab.ideal-study.uz/api';

export default axios;

export const $api = axios.create({
    baseURL: 'https://maktab.ideal-study.uz/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Интерцептор для автоматической подстановки актуального токена
$api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
