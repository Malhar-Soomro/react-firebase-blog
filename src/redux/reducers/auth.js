import { AUTH } from "../constants/actionTypes";


const authReducer = (state = false, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem("auth", true)
            console.log("in reducer")
            return true;
        default:
            return state;
    }
}

export default authReducer;


