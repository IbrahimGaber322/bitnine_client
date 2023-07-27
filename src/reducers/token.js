import {SIGNIN,SIGNUP,SIGNOUT, CONFIRM} from "../constants/actionTypes";


const tokenReducer = (token=JSON.parse(localStorage.getItem("token")) ,action) =>{
    
    switch(action.type){
        case SIGNUP:
        case SIGNIN:
        case CONFIRM:
            localStorage.setItem("token",JSON.stringify(action?.payload));
        return token=JSON.parse(localStorage.getItem("token"));
        case SIGNOUT:
            localStorage.removeItem("token");
        return token=JSON.parse(localStorage.getItem("token"));
        default: 
        return token;
    } 
    

}

export default tokenReducer;