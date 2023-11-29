import axios from "axios";


const api = axios.create( {
   /*  baseURL: "https://jsonplaceholder.typicode.com", */
   baseURL: "http://localhost:3000/api",
    withCredentials: false,
});

export default api;