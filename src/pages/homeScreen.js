import React from 'react';
import { useState,useEffect } from 'react';
import "../styling/homescreen.css"
import NavBarHome from '../Components/NavBarHome';
import PopUp from '../Components/PopUp';
import { BrowserRouter, Route, Routes,Link,Navigate } from 'react-router-dom';
import {
    createUserWithEmailAndPassword , 
    onAuthStateChanged, 
    signOut,
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail
} from "firebase/auth"
import { auth } from "../firebase/firebaseconfig";
const HomeScreen = () => {

    const [registerEmail,setRegisterEmail]= useState("")
    const [isClient,setisClient]= useState()
    const [isRegistered,setisRegistered]= useState()
    const [wrongDataEmail,setwrongDataEmail]= useState("undefinedEmail")
    



    async function Register(){
        let input = document.getElementsByClassName("InputCont")[0]

       try{
            let result = await fetchSignInMethodsForEmail(auth, registerEmail) 
        
            if(result.length !== 0){
                renderPopUp(true);
                setwrongDataEmail('undefinedEmail')
                input.style.borderBottom = "none"
                setTimeout(() => {
                    setisClient(true)
                }, 5000);
            }else{
                renderPopUp(false)
                setwrongDataEmail('undefinedEmail')
                input.style.borderBottom = "none"
                setTimeout(() => {
                    setisClient(false)
                }, 5000);
            }
        }catch(err){
            setwrongDataEmail('WrongEmail')
            input.style.borderBottom = "#ffa00a solid"
        }
    
     
    }

function renderPopUp(account){
    if(account){
        setisRegistered(true)
    }else if(account === false){
        setisRegistered(false)
    }

}
return (
        <div className='homeScreenContainer'>
            {
            isRegistered ? <PopUp  exists ={isRegistered} /> : 
            isRegistered === undefined? null :<PopUp exists ={isRegistered} /> 
            }
           
            {isClient ? (
            <Navigate replace to="/login" />
          ) : isClient=== undefined ? null :  (
            <Navigate replace to="/register" />
          )}
            <div className='greetingHomeScreen'>
            <NavBarHome />
                <div className='GreetingPlusInput'>
                        <div>
                            <h1>Unlimited movies, TV shows, and more.</h1>
                        </div>
                        <div className='our-story-card-subtitle'>
                            <p>Watch anywhere. Cancel anytime.</p>
                        </div>
                        <div className='emailformtitle'>
                            <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        </div>
                        <div className='EnterEmailInputBtn'>
                            <div className='InputCont'>
                                <input type="email" placeholder="Enter Email" onChange={(event)=>{setRegisterEmail(event.target.value)}}/>
                            </div>
                            <div className='btnCont'>
                                <button onClick={Register}>Get Started</button>
                            </div>
                            <div className={wrongDataEmail}>
                                <p>Please Enter Valid Email</p>
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
      
    );
}

export default HomeScreen;
