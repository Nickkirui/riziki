
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import "firebase/compat/auth";
import 'firebase/compat/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnjn2jPcmM4fEG09SxN7b4BiKOQlws2yw",
  authDomain: "riziki-557a0.firebaseapp.com",
  projectId: "riziki-557a0",
  storageBucket: "riziki-557a0.appspot.com",
  messagingSenderId: "759241351109",
  appId: "1:759241351109:web:9c8516928f22652b0eb5ac"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth= firebase.auth()
const database = firebase.firestore()

export {auth, database}