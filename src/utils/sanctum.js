import axios from "axios";

axios.defaults.withCredentials = true;
const sanctumFetch = axios.create({
    withCredentials: true,
    withXSRFToken: true,
    baseURL:'http://localhost:82/laravelbackend/public/sanctum/csrf-cookie',
     headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});
// /api/v1
// http://localhost:82/laravelbackend/public/api/v1
export default sanctumFetch;