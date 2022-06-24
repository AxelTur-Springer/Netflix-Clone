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
import PopUpChangePass from './popUpchangePass';
const Login = () => {
    const [registerEmail,setRegisterEmail]= useState("")
    const [registerPassword,setRegisterPassword]= useState("")
    const [loginEmail,setloginEmail]= useState("")
    const [loginPassword,setLoginPassword]= useState("")
    const [user,setUser] = useState({})
    const [resetPass,setResetPass] = useState(false)
    const [wrongPassOrToMuchTrys,setwrongPassOrToMuchTrys] = useState()
    const [mailNotFound,setmailNotFound] = useState()

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
        let passwordCont = document.getElementsByClassName("ForgotPassContainer")[0]
        let WrongEmail = document.getElementsByClassName("WrongEmailLogin")[0]
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword)
                passwordCont.style.display ="none"
                WrongEmail.style.display ="none"

                
        }
        catch(error){
            WrongEmail.style.display = "none"
            passwordCont.style.display ="none"

            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            if(errorMessage ==="Firebase: Error (auth/wrong-password)."){
                passwordCont.style.display ="flex"
                WrongEmail.style.display = "none"
                setwrongPassOrToMuchTrys("Wrong Password")
            }
            if(errorMessage=== "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."){
                passwordCont.style.display ="flex"
                WrongEmail.style.display = "none"
                setwrongPassOrToMuchTrys("To many tries, please wait 10 minutes or reset password")

            }
            if(errorMessage==="Firebase: Error (auth/internal-error)."){
                WrongEmail.style.display = "flex"
                setmailNotFound("Enter Password")
            }
            if(errorMessage==="Firebase: Error (auth/user-not-found)."){
                setmailNotFound("User not found, please register")
                WrongEmail.style.display ="flex"

            }
            if(errorMessage==="Firebase: Error (auth/invalid-email)."){
                setmailNotFound("Please enter valid Email")
                WrongEmail.style.display ="flex"
            }
            
        }
    }
    function onClickReset(){
        let passwordCont = document.getElementsByClassName("ForgotPassContainer")[0]
        passwordCont.style.display ="none"
        setResetPass(true) 
    }

    return (
        <>
        {resetPass ? <PopUpChangePass hidePop ={()=>{setResetPass(false)}}/> : null}
        <NavBarSignInRegister />
        <div className='loginBodyContainer'> 
            <div className='contLogin'>
                <div className='greetInputBtn'>
                    <h1>Sign In</h1>
                        <div className='InputsCont'>
                            <input type="email" name="" placeholder='email' onChange={(event)=>{setloginEmail(event.target.value)}}/>
                            <div className='WrongEmailLogin'>
                                <p>
                                    {mailNotFound}
                                </p>
                            </div>
                            <input type = "password" name=""  placeholder='password' onChange={(event)=>{setLoginPassword(event.target.value)}}/>
                            <div className='ForgotPassContainer'>
                                <p>
                                    {wrongPassOrToMuchTrys}<button onClick={onClickReset}>Reset</button>
                                </p>
                            </div>
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
