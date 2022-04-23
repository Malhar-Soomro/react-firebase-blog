import React from 'react'
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { signin } from "../redux/actions/auth.js";
import { useDispatch } from 'react-redux';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();



    // const signInWithGoogle = () => {

    //     signInWithPopup(auth, provider).then((result) => {
    //         setLoggedIn(true);
    //         localStorage.setItem("loggedIn", true)
    //         console.log(result)
    //         navigate("/")
    //     })
    // }

    return (
        <div className="loginPage">
            <p>
                Sign in with Google to Continue
            </p>
            <button
                className="login-with-google-btn"
                onClick={dispatch(signin(navigate, dispatch))}
            >
                Sign in with Google
            </button>
        </div >
    )
}

export default Login