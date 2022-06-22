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
import {loginSuccess, logoutSuccess,UserLoginName} from "../features/loginCheck/loginSlice"
import "../styling/login.css"
import NavBarSignInRegister from '../Components/navBarSignInRegister';

const Login = () => {
    const [registerEmail,setRegisterEmail]= useState("")
    const [registerPassword,setRegisterPassword]= useState("")
    const [loginEmail,setloginEmail]= useState("")
    const [loginPassword,setLoginPassword]= useState("")
    const [user,setUser] = useState({})
    const store = useSelector((store)=>{return store});
    const stateOfLogIn = useSelector((store)=>{return store.LogedInReducer})
    const dispatch = useDispatch();
    //console.log(store)


useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
             if(currentUser!== null){
               dispatch(loginSuccess("true"))
                dispatch(UserLoginName(user.email))
            }
    });

}, [])
    async function Register(){
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword)
          
                dispatch(loginSuccess("true"))
            }
        catch(error){
            console.log(error);
        }
    }
    const login = async() =>{
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword)
                
        }
        catch(error){
            console.log(error);
            alert(error)
        }
    }

    return (
        <>
        <NavBarSignInRegister />
        <div className='loginBodyContainer'> 
            <div className='contLogin'>
                <div className='greetInputBtn'>
                    <h1>Sign In</h1>
                        <div className='InputsCont'>
                            <input type="text" name="" placeholder='email' onChange={(event)=>{setloginEmail(event.target.value)}}/>
                            <input type = "password" name=""  placeholder='password' onChange={(event)=>{setLoginPassword(event.target.value)}}/>
                        </div>
                        <div className='buttonCont'>
                            <button onClick={login}>Sign In</button>
                        </div>           
                    </div>
                <div>
                    <p>
                    New to Netflix? <Link className='LinkToRegis' to={"/register"}>Sign up now</Link> This 
                    page is protected by Google reCAPTCHA to ensure you're not a bot. 
                    Learn more.
                    </p>
                </div>
            </div>
        </div>  

    </>
    );
}

export default Login;
