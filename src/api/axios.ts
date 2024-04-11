import axios from 'axios';

const productionUrl = 'https://aim-edge-backend.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});
