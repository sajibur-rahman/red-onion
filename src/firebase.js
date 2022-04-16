import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,

//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

//   appId: process.env.REACT_APP_ID
// };

  const firebaseConfig = {
    apiKey: "AIzaSyA_OUQy0oyAn9U12OSEBbbdK5VR2J9PiMc",
    authDomain: "red-onion-ca38f.firebaseapp.com",
    projectId: "red-onion-ca38f",
    storageBucket: "red-onion-ca38f.appspot.com",
    messagingSenderId: "728272046290",
    appId: "1:728272046290:web:9a4ba58ed6392a0811c50b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth  = getAuth(app);

export default auth;
