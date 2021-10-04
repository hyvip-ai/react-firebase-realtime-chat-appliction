import firebase from "firebase/compat/app"
import React from 'react'
import "firebase/compat/auth"
import "../styles/buttons.css"
import {auth} from "../firebase_config/firebase"
function Login() {
    const signInWithGoogle = ()=>{
        const provider =  new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (

        <div>
            <button onClick={signInWithGoogle} className="login-with-google-btn">Sign In with Google</button>
        </div>
    )
}

export default Login
