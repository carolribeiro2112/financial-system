import axios from 'axios';

const localApi = axios.create({
  baseURL: 'http://localhost:4000'
})

export {localApi};