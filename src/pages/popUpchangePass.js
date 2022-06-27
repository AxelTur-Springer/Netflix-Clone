import React from 'react';
import {sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../firebase/firebaseconfig";
import { useState,useEffect } from 'react';
import "../styling/popupChangePass.css"
import close from "../assets/close.png"

const PopUpChangePass = (props) => {
    const [Email,setEmail]= useState(undefined)
   



function SendEmail(){
    let ConfirmSent = document.getElementsByClassName("ConfirmacionEmailSent")[0]
sendPasswordResetEmail(auth, Email)
ConfirmSent.style.display = "flex"
setTimeout(() => {
    props.hidePop()

}, 3000);

}

    return (
        <>
        <div className='PopUpChangePassContainer'> 
            <div className='contPopUp'>
                <div className='CloseBtnCont'>
                        <img onClick={()=>{props.hidePop()}}
                        src={close} alt="" />
                </div>
                <div className='greetInputBtn'>
                    <h1>Change Password</h1>
                        <div className='InputsCont'>
                            <input type="text" name="" placeholder='email' onChange={(event)=>{setEmail(event.target.value)}}/>
                        </div>
                        <div className='buttonCont'>
                            <button onClick={SendEmail}>Send Email</button>
                        </div>
                        <div className='ConfirmacionEmailSent'>
                            <p>
                                Email sent to {Email}, if you dont find the mail, check spam.
                            </p>
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
