importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js');
firebase.initializeApp({
    messagingSenderId: "66363224618",
})

const initMessaging = firebase.messaging()