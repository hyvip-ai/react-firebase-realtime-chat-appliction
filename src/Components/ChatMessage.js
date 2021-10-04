import React from 'react'
import { auth } from '../firebase_config/firebase'
import '../styles/chat.css'
function ChatMessage({msg}) {
const {text,uid,photoURL} = msg
console.log(photoURL)
 const messegeClass =uid === auth.currentUser.uid? "sent" : "received";
    return (
        <div className={`message ${messegeClass}`}>
            <img src={photoURL} alt={uid} />
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage
