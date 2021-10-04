import React from 'react'
import {auth} from "../firebase_config/firebase"
function SignOut() {
    const signOutUser = ()=>{
        console.log(auth)
         auth.signOut()
     }
    return (
        <div>
            <button onClick={signOutUser} className="sign-out">SignOut</button>
            
        </div>
    )
}

export default SignOut
