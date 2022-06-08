import React from 'react';
import { useState,useEffect } from 'react';
import "../styling/homescreen.css"
import NavBarHome from '../Components/NavBarHome';
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

    async function Register(){
       let result = await fetchSignInMethodsForEmail(auth, registerEmail) 
        setisClient(result)
    }

console.log(isClient)
return (
        <div className='homeScreenContainer'>
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
                                <input type="text" placeholder='Email address' onChange={(event)=>{setRegisterEmail(event.target.value)}}/>
                            </div>
                            <div className='btnCont'>
                                <button onClick={Register}>Get Started</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      
    );
}

export default HomeScreen;
