import axios from "axios";

const customFetch = axios.create({
    baseURL:'/api/v1'
});
// /api/v1
// http://localhost:82/laravelbackend/public/api/v1
export default customFetch;