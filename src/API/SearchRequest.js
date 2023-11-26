import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:4000' });

export const getSearchList = (text) => API.get(`/search/${text}`);