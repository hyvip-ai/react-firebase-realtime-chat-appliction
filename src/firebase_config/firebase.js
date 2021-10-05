import firebase from "firebase/compat/app"

import "firebase/compat/firestore"

import "firebase/compat/auth"


firebase.initializeApp({
    apiKey: "AIzaSyBcnQQG8n5MceuHCNI-f3yMzJRf3fn8wWs",
    authDomain: "react-fire-chat-409e1.firebaseapp.com",
    projectId: "react-fire-chat-409e1",
    storageBucket: "react-fire-chat-409e1.appspot.com",
    messagingSenderId: "66363224618",
    appId: "1:66363224618:web:aeeb034e2f7ff1e8bac953",
    measurementId: "G-HSNW3V6WSK"
  })

const auth = firebase.auth();
const firestore = firebase.firestore();

export {auth,firestore,firebase}