import moment from 'moment'
import React from 'react'
import { auth } from '../firebase_config/firebase'
import '../styles/chat.css'
function ChatMessage({msg}) {
const {text,uid,photoURL,displayName,createdAt} = msg


 const messegeClass =uid === auth.currentUser.uid? "sent" : "received";
    return (
            <div className="messegeWrapper">
             
                <div className={`message ${messegeClass}`}>
                
                    <a href={photoURL} target="_blank" rel="noreferrer"><img src={photoURL} alt={uid}/></a>
                
                    <p>{displayName} <br/>
                        {text}
                        <br />
                        <span style={{textAlign:'right',display:'block'}}>
                        {createdAt?moment(createdAt.seconds*1000).format('LT'):null}
                        </span>
                    </p>
                </div>
            </div>
            
    )
}

export default ChatMessage
