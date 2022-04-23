import { AUTH } from "../constants/actionTypes"
import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from 'firebase/auth';



export const signin = (navigate, dispatch) => {
    signInWithPopup(auth, provider).then((result) => {
        navigate("/")
        dispatch({ type: AUTH, data: result })
    })
}