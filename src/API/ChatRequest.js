import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:4000' });

export const createChat = (data) => API.post('/chat/', data);

export const userChats = (userId) => API.get(`/chat/${userId}`);

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);

export const deleteChat = (chatId) => API.delete(`/chat/${chatId}`);