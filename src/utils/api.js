import axios from 'axios'

const api = axios.create({
  baseURL: 'https://6ae24423bbb541292299d342.mockapi.io/api/v1',
  timeout: 10000,
})

export default api
