import axios from 'axios'
axios.defaults.baseURL = 'https://maktab.ideal-study.uz/api'

export default axios


export const $api = axios.create({
    baseURL: 'https://maktab.ideal-study.uz/api',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
    },
})
