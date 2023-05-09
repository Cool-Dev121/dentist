import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import appoints from './appoints';

export default combineReducers({
  auth,
  appoints,
  message,
});