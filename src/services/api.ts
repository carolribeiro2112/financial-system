import axios from 'axios';

const localApi = axios.create({
  baseURL: 'http://localhost:4000'
})

export {localApi};

const externalApi = axios.create({
  baseURL: 'https://v2.api.forex/infos'
})

export {externalApi};