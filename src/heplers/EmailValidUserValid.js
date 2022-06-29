import {
    createUserWithEmailAndPassword , 
    onAuthStateChanged, 
    signOut,
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail
    } from "firebase/auth"
    import { auth } from "../firebase/firebaseconfig";

export default function checkValidacions(email){
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    
if(regex.test(email)){
    return fetchSignInMethodsForEmail(auth, email).then((result) => {
        if(result.length !== 1){
            return true        
        }else{
            return false
        }
    })       
}

}