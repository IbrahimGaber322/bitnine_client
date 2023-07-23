import { GETUSER, SIGNOUT } from "../constants/actionTypes";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETUSER:
      return {
        ...state,
        user: action.payload,
      };
    case SIGNOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
