import React from 'react'
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedIn }) => {
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            setLoggedIn(true);
            localStorage.setItem("loggedIn", true)
            console.log(result)
            navigate("/")
        })
    }
    return (
        <div className="loginPage">
            <p>
                Sign in with Google to Continue
            </p>
            <button
                className="login-with-google-btn"
                onClick={signInWithGoogle}
            >
                Sign in with Google
            </button>
        </div >
    )
}

export default Login