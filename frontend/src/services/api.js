import axios from 'axios';

const token = 'jfigueiredo07@hotmail.com';

const api = axios.create({
  baseURL: 'https://tiao.supliu.com.br/api',
  headers: {
    Authorization: token,
    'Content-Type': 'application/json' 
  }
});

export default api;