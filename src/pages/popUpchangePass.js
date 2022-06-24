import React from 'react';
import {
    createUserWithEmailAndPassword , 
    onAuthStateChanged, 
    signOut,
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail,
    sendPasswordResetEmail } from "firebase/auth"

import { auth } from "../firebase/firebaseconfig";
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "../styling/popupChangePass.css"
import NavBarSignInRegister from '../Components/navBarSignInRegister';

const PopUpChangePass = (props) => {
    const [Email,setEmail]= useState(undefined)
   


useEffect(() => {
   

}, [])
    async function Register(){
    
    }
function SendEmail(){
sendPasswordResetEmail(auth, Email)
setTimeout(() => {
    props.hidePop()

}, 1000);

}

    return (
        <>
        <div className='PopUpChangePassContainer'> 
            <div className='contPopUp'>
                <div className='greetInputBtn'>
                    <h1>Change PassWord</h1>
                        <div className='InputsCont'>
                            <input type="text" name="" placeholder='email' onChange={(event)=>{setEmail(event.target.value)}}/>
                        </div>
                        <div className='buttonCont'>
                            <button onClick={SendEmail}>Send Email</button>
                        </div>           
                    </div>
                <div>
                    <p>
                  
                    </p>
                </div>
            </div>
        </div>  

    </>
    );
}

export default PopUpChangePass;
