import React,{useRef, useState} from 'react'
import ChatMesseges from './ChatMesseges';
import {useCollectionData} from "react-firebase-hooks/firestore"
import {auth,firestore} from "../firebase_config/firebase"
import '../styles/chat.css'
import firebase from "firebase/compat/app"
function Chatroom() {
    const dummy = useRef();
    const messegeRef = firestore.collection("messeges");
    const query = messegeRef.orderBy("createdAt").limit(25);
    const [formValue,setFormValue] = useState("")
    const [messages] = useCollectionData(query,{idField:"id"});
  

   const addNewMessege = async(e)=>{
    e.preventDefault();
    const {uid,photoURL} = auth.currentUser;
    await messegeRef.add({
        text:formValue,
        createdAt : firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
    })
    setFormValue("")
    dummy.current.scrollIntoView({behavious:"smooth"});
   }
    return (
        
        <div>
            
            <h1 id="mine">leave a Messege !!!</h1>
            <div>
            <main>
                {messages? <ChatMesseges messeges={messages}/>:null}
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
