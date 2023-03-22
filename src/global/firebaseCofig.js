
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import "firebase/compat/auth";
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBnjn2jPcmM4fEG09SxN7b4BiKOQlws2yw",
//   authDomain: "riziki-557a0.firebaseapp.com",
//   projectId: "riziki-557a0",
//   storageBucket: "riziki-557a0.appspot.com",
//   messagingSenderId: "759241351109",
//   appId: "1:759241351109:web:9c8516928f22652b0eb5ac"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDr1sKTcW1vh0Nt4Khhhf8DC6XqbZSF6eo",
  authDomain: "riziki12-1beef.firebaseapp.com",
  projectId: "riziki12-1beef",
  storageBucket: "riziki12-1beef.appspot.com",
  messagingSenderId: "270252332527",
  appId: "1:270252332527:web:8fe570c0aea1ee4988521a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth= firebase.auth()
const database = firebase.firestore()
const storage =  firebase.storage()

export {auth, database, storage}