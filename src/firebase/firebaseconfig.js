import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const API_KEY = "AIzaSyB4FPYPyP4e_efbRJntLxWcKf4KFPQ-1rc"


const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "netflixclone-d8d7d.firebaseapp.com",
    projectId: "netflixclone-d8d7d",
    storageBucket: "netflixclone-d8d7d.appspot.com",
    messagingSenderId: "70146595782",
    appId: "1:70146595782:web:caaebaa73002c1ed9c70c7"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
