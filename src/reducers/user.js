import { GETUSER, SIGNOUT } from "../constants/actionTypes";



const userReducer = (user = null, action) => {
  switch (action.type) {
    case GETUSER:
      user=action?.payload;
      return user
    case SIGNOUT:
      user=null;
      return user;
    default:
      return user;
  }
};

export default userReducer;
