import axios from "axios";


const api = axios.create( {
    baseURL: "https://jsonplaceholder.typicode.com",
    withCredentials: false,
    headers: {
        /* token: token */
    },
});

export default api;