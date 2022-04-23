import { CREATE_POST, GET_POSTS, DELETE_POST } from "../constants/actionTypes";


const authReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                title: action.payload.title,
                postText: action.payload.postText,
                author: action.payload.author
            };
        case GET_POSTS:
            // console.log("in get posts reducer")
            // console.log(action.payload.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            // return state;
            return action.payload.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        case DELETE_POST:
            return state.filter(({ id }) => id !== action.payload);
        default:
            return state;
    }
}

export default authReducer;


