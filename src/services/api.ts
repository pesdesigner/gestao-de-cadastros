import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/products' //http://localhost:8080/produtos'
})

export default api;