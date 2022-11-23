
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
  apiKey: "AIzaSyB-MGzLHzT3M8kpPfo-1XFKmVXPvB37fvo",
  authDomain: "rizikimain-835ca.firebaseapp.com",
  projectId: "rizikimain-835ca",
  storageBucket: "rizikimain-835ca.appspot.com",
  messagingSenderId: "1074663379269",
  appId: "1:1074663379269:web:f2488752870ee4e7886e2c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth= firebase.auth()
const database = firebase.firestore()
const storage =  firebase.storage()

export {auth, database, storage}