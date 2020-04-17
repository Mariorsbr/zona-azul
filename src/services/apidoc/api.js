import axios from 'axios';

const api = axios.create({
    baseURL: 'https://zaf-dev.herokuapp.com/v1',
})

export default api;

