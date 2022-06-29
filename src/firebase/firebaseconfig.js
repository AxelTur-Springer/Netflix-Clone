import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getDatabase } from "firebase/database";
const API_KEY = process.env.REACT_APP_API_KEY_FIREBASE


const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "netflix-clone-c230f.firebaseapp.com",
    projectId: "netflix-clone-c230f",
    storageBucket: "netflix-clone-c230f.appspot.com",
    messagingSenderId: "370884423759",
    appId: "1:370884423759:web:9415f73eb6a8732c44fa3a",
    databaseURL: "https://netflix-clone-c230f-default-rtdb.firebaseio.com",
  };
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app)
