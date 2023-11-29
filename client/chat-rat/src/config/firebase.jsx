import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyABtEG1tX4qvm8_0G9__MlR9VxE63zQRFw",
  authDomain: "rat-chat-936b2.firebaseapp.com",
  projectId: "rat-chat-936b2",
  storageBucket: "rat-chat-936b2.appspot.com",
  messagingSenderId: "561416631520",
  appId: "1:561416631520:web:781c0c4f8b3aec36ee4c85",
  measurementId: "G-THQZKWXEHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export default auth;