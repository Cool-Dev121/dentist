import {
  ADD,
  GETALL,
  REMOVE_APPOINT,
} from "../actions/types";

const initialState = [];

export default function (state = initialState, action){
  const { type, payload } = action;

  switch (type) {
    case ADD:
      console.log(payload)
      return [...state, payload]; 
    case GETALL:
      return payload;
    case REMOVE_APPOINT:
      return state.filter(({ _id }) => _id !== payload);
    default:
      return state;
  }
};
