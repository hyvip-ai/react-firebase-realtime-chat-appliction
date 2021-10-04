import React from 'react'
import { auth } from '../firebase_config/firebase'
import '../styles/chat.css'
function ChatMessage({msg}) {
const {text,uid,photoURL} = msg
console.log(photoURL)
 const messegeClass =uid === auth.currentUser.uid? "sent" : "received";
    return (
        <div className={`message ${messegeClass}`}>
            <a href={photoURL} target="_blank" rel="noreferrer"><img src={photoURL} alt={uid}/></a>
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage
