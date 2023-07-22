import axios from "axios";
import store from "../store/store";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const API = axios.create({baseURL:SERVER_URL});
const GetUser = ()=>{
     const user = store.getState().user;
    return user;
}
API.interceptors.request.use((req)=>{
    const user = GetUser();
    if(user?.token){
        req.headers.Authorization = `Bearer ${user?.token}`
    }
  
    return req ;
});

export const signUp = (newUser) => API.post(`/users`, newUser);
export const signIn = (user) => API.post(`/users/login`, user);

