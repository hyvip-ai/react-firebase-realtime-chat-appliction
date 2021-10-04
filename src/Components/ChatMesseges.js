import React from 'react'
import ChatMessage from './ChatMessage'
import '../styles/chat.css'
function ChatMesseges({messeges}) {

    return (
        <div>
            {messeges.map((item)=>{
                return <ChatMessage key={item.id} msg={item}/>
            })}
        </div>
    )
}

export default ChatMesseges
