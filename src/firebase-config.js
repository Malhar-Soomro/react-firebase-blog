// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATaMYF68SXjsvzNJ_5HjeXB_xEpDKXeZM",
    authDomain: "blogapp-1507d.firebaseapp.com",
    projectId: "blogapp-1507d",
    storageBucket: "blogapp-1507d.appspot.com",
    messagingSenderId: "206911116428",
    appId: "1:206911116428:web:d4e7a115a05fffe52bd7a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(auth)