import React,{useEffect, useRef, useState} from 'react'
import ChatMesseges from './ChatMesseges';
import {useCollectionData} from "react-firebase-hooks/firestore"
import {auth,firestore} from "../firebase_config/firebase"
import '../styles/chat.css'
import firebase from "firebase/compat/app"
import "../styles/typing.css"
import v4 from "uuid/dist/v4"
function Chatroom() {
   
    const dummy = useRef();
    const messegeRef = firestore.collection("messeges");
    const query = messegeRef.orderBy("createdAt");
    const [formValue,setFormValue] = useState("")
    const [messages] = useCollectionData(query,{idField:"id"});
    // const [typing,setTyping] = useState(false)
    const scrollToBottom = () => {
        dummy.current.scrollIntoView({ behavior: "smooth" })
      }
      useEffect(() => {
        //   console.log("runKoreche");
          scrollToBottom();
      }, [messages])
      //typing for useeffect

   const addNewMessege = async(e)=>{
    e.preventDefault();
    const {uid,photoURL,displayName} = auth.currentUser;

    await messegeRef.add({
        text:formValue,
        createdAt : firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
        displayName
    })
    setFormValue("");

    // setTyping(false)
   }


    return (
        
        <div>

            <div>
            <main>
                
                {messages? <ChatMesseges key={v4()}  messeges={messages}/>:null}
              
            {/* {typing?<> <div class="chat-bubble">
                <div class="typing">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                </div>
                </div></>:null} */}
                <div ref={dummy}></div>
                 
            </main>
            </div>
       
            <form  onSubmit={addNewMessege}>
                <input placeholder="Let's Talk" autoComplete="off" type="text" id="myMsg" value={formValue} onInput={(e)=>{setFormValue(e.target.value)}}/>
                <button type="submit" disabled={formValue===""?true:false}>&#9992;</button>
            </form>
        </div>
    )
}

export default Chatroom
