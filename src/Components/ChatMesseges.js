import React,{useState} from 'react'
import ChatMessage from './ChatMessage'
import '../styles/chat.css'
import moment from 'moment'
function ChatMesseges({messeges}) {

var current = ""
    return (
        <div>
            
            {messeges.map((item,i)=>{
                return <>
                <div key={item.createdAt.seconds} className="dateTime" style={{color:'white'}}>

                    {current===moment(item.createdAt.seconds*1000).format("LL")?null:current=moment(item.createdAt.seconds*1000).format("LL")}
                </div>
                 <ChatMessage key={item.id} msg={item}/>
                 </>
            })}
        </div>
    )
}

export default ChatMesseges
