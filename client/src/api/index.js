import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const addTask = (data) => httpClient.post('/tasks', data);
export const getTasks = () => httpClient.get('/tasks');
export const setTaskDone = (id) => httpClient.patch(`/tasks/${id}`);
