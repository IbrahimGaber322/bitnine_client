import {SIGNIN,SIGNUP,SIGNOUT} from "../constants/actionTypes";


const userReducer = (user=JSON.parse(localStorage.getItem("user")) ,action) =>{
    
    switch(action.type){
        case SIGNUP:
        case SIGNIN:
            localStorage.setItem("user",JSON.stringify(action?.payload));
        return user=JSON.parse(localStorage.getItem("user"));
        case SIGNOUT:
            localStorage.removeItem("user");
        return user=JSON.parse(localStorage.getItem("user"));
        default: 
        return user;
    } 
    

}

export default userReducer;