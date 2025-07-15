import axios from "axios";

// LARAVEL
// const user = JSON.parse(localStorage.getItem('user'));
// let customFetch;
// if(!user){
//     customFetch = axios.create({
//         baseURL:'http://localhost:82/laravelbackend/public/api/v1',
//         withCredentials: true,
//         withXSRFToken: true,
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//     });
// }else{
//     customFetch = axios.create({
//         baseURL:'http://localhost:82/laravelbackend/public/api/v1',
//         withCredentials: true,
//         withXSRFToken: true,
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             'Authorization': 'Bearer ' + user.token
//         },
//     });
// }

const customFetch = axios.create({
    baseURL:'/api/v1',
});
// /api/v1
// http://localhost:82/laravelbackend/public/api/v1
export default customFetch;