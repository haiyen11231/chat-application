import firebase from "firebase/compat/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBYxtHTOqXF4r8ynULS0wmi6_88zST379I",
    authDomain: "unichat-4971f.firebaseapp.com",
    projectId: "unichat-4971f",
    storageBucket: "unichat-4971f.firebasestorage.app",
    messagingSenderId: "523579837873",
    appId: "1:523579837873:web:b2147d4dc15cff74c40190",
  })
  .auth();
