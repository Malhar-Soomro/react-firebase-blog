import { CREATE_POST } from "../constants/actionTypes";


const authReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                title: action.payload.title,
                postText: action.payload.postText,
                author: action.payload.author
            };
        default:
            return state;
    }
}

export default authReducer;


