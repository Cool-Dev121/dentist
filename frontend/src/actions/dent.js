import {
    GETALL,
    ADD,
    REMOVE_APPOINT,
  } from "./types";

  import UserService from "../services/user.service";

  export const add = (formData) => async (dispatch) => {

    try {
      const res = await UserService.create(formData);

  
      dispatch({
        type: ADD,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const getAllData = (role) => async (dispatch) => {
    try {
      const res = await UserService.getAll(role);
      // console.log(res.data);
      dispatch({
        type: GETALL,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // export const findByTitle = (name) => async (dispatch) => {
  //   try {
      
  //     // const res = await UserService.findBy(name);
  //     console.log(name);
  //     dispatch({
  //       type: GETFIND,
  //       payload: {name},
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  export const deleteAppoint = (id) => async (dispatch) => {
    try {
      await UserService.remove(id);
       dispatch({
         type: REMOVE_APPOINT,
         payload: id,
       });
  
    } catch (err) {
      console.log(err);
    }
  };
  
    
    
