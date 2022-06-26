import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const API_KEY = process.env.REACT_APP_API_KEY_FIREBASE


const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "netflix-clone-c230f.firebaseapp.com",
    projectId: "netflix-clone-c230f",
    storageBucket: "netflix-clone-c230f.appspot.com",
    messagingSenderId: "370884423759",
    appId: "1:370884423759:web:9415f73eb6a8732c44fa3a"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
