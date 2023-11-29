import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAJlKtXQ1mRjZDBBDyAoVL9E08KJ7r9iX4",
    authDomain: "chat-rat-ca2d4.firebaseapp.com",
    projectId: "chat-rat-ca2d4",
    storageBucket: "chat-rat-ca2d4.appspot.com",
    messagingSenderId: "779633791027",
    appId: "1:779633791027:web:322bb2065634626f00d346",
    measurementId: "G-XYGFVJ3EP6"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;