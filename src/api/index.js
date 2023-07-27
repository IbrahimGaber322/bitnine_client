import axios from "axios";
import store from "../store/store";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const API = axios.create({baseURL:SERVER_URL});
const GetToken = ()=>{
     const token = store?.getState()?.token?.token;
    return token;
}
API.interceptors.request.use((req)=>{
    const token = GetToken();
    if(token){
        req.headers.Authorization = `Bearer ${token}`
    }
  
    return req ;
});

export const signUp = (newUser) => API.post(`/user/signUp`, newUser);
export const signIn = (user) => API.post(`/user/signIn`, user);

export const confirm = (token) => API.get(`/user/confirm/${token}`);
export const sendConfirm = (token) => API.post('user/sendConfirm', token);
export const getUser = () => API.get(`/user/getUser`)

export const forgotPassword = (userEmail) => API.post('user/forgotPassword', userEmail);
export const resetPassword = (userData) => API.post('user/resetPassword', userData);
