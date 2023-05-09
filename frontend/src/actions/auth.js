import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
  } from "./types";
  
  import AuthService from "../services/auth.service";

  
  export const signup = (formData) => async (dispatch) => {

    return await AuthService.register(formData).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const signin = (email, password) => async (dispatch) => {
  
    return await AuthService.login(email, password)
    .then((response)=>{
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: response},
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.message,
        });
    })
    .catch((error)=>{
      const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
    })
  };

  export const logout = () => async (dispatch) => {
    
    await AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };

