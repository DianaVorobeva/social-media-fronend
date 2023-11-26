import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:4000' });

export const toSupport = (data) => API.post('/support/', data);