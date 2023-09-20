import { SIGNUP, SIGNIN, SIGNOUT, GETUSER } from "../constants/actionTypes";

import * as api from "../api";

export const signOut = () => async (dispatch) => {
  try {
    dispatch({ type: SIGNOUT });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (user, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(user);
    console.log(data);
    if (data.token) {
      dispatch({ type: SIGNUP, payload: data });

      navigate("/");
    } else {
      navigate("/confirmEmail");
    }
  } catch (error) {
    console.log(error);
  }
};

export const confirm = (token, navigate) => async (dispatch) => {
  try {
    const { data } = await api.confirm(token);
    dispatch({ type: SIGNUP, payload: data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const sendConfirm = (token, setSent) => async (dispatch) => {
  console.log(token);
  try {
    await api.sendConfirm(token);
    setSent(true);
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (user, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(user);
    if (data) {
      dispatch({ type: SIGNIN, payload: data });

      navigate("/");
    } else {
      dispatch({ type: SIGNOUT });
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (setLoading) => async (dispatch) => {
  try {
    const { data } = await api.getUser();
    dispatch({ type: GETUSER, payload: data });
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

export const forgotPassword =
  (userEmail, navigate, setSent) => async (dispatch) => {
    try {
      await api.forgotPassword(userEmail);
      setSent(true);
    } catch (error) {
      console.log(error);
    }
  };

export const resetPassword = (userData, navigate) => async (dispatch) => {
  try {
    await api.resetPassword(userData);

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
