import { SIGNUP,SIGNIN, SIGNOUT, GETUSER } from "../constants/actionTypes";

import * as api from "../api";


export const signOut = (navigate) => async (dispatch) => {

  try {

    dispatch({type:SIGNOUT});
    navigate("/");
  } catch (error) {
    console.log(error);
  }
}



export const signUp = (user,navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(user);
    console.log(data);
    if(data.token){
      dispatch({ type: SIGNUP, payload: data });
      
    navigate("/");
    }else{
      navigate("/confirmEmail");
    }
  } catch (error) {
    console.log(error);
  }
}  

export const confirm = (token,navigate) => async (dispatch) => {
  try {
    const { data } = await api.confirm(token);
    dispatch({ type: SIGNUP, payload: data });
   
    navigate("/");
  } catch (error) {
    console.log(error);
  }
}

export const sendConfirm = (token, setSent) => async (dispatch) => {
  console.log(token);
  try {
    await api.sendConfirm(token);
    setSent(true);
    
  } catch (error) {
    console.log(error);
  }
} 

export const signIn = (user, navigate) => async (dispatch) => {
  
  try {
    const { data } = await api.signIn(user);
      console.log(data);
      dispatch({ type: SIGNIN, payload: data });
      
      navigate("/");
    
    
  } catch (error) {
    console.log(error);
  }
}  

export const getUser = () => async (dispatch) => {
 
  
  try {
    console.log("a7a");
    const { data } = await api.getUser();
      dispatch({ type: GETUSER, payload: data });
  } catch (error) {
    console.log(error);
  }
} 










export const forgotPassword = (userEmail,navigate) => async (dispatch) => {
  try {
    const { data } = await api.forgotPassword(userEmail);
    if(data.message === "success"){
      navigate("/resetpassword");
    }
  } catch (error) {
    console.log(error);
  }
}  

export const resetPassword = (userData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.resetPassword(userData);
   
    if(data){
      navigate("/signin");
    }
  } catch (error) {
    console.log(error);
  }
}

