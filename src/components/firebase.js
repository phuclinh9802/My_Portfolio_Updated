// Import the functions you need from the SDKs you need
import firebase from "firebase";
var firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyALJ-wQZluIw01-q9LHnkQ3g5LLbsMLHoA",
        authDomain: "react-contact-form-b785f.firebaseapp.com",
        projectId: "react-contact-form-b785f",
        storageBucket: "react-contact-form-b785f.appspot.com",
        messagingSenderId: "485171898193",
        appId: "1:485171898193:web:106ed5d2644532ba5bd570"
      
});


var db = firebaseApp.firestore();

export { db };