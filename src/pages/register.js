import React from 'react';
import {
    createUserWithEmailAndPassword , 
    onAuthStateChanged, 
    signOut,
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail} from "firebase/auth"

import { auth } from "../firebase/firebaseconfig";
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loginSuccess, logoutSuccess,UserLoginName} from "../features/loginCheck/loginSlice"
import "../styling/register.css"
import NavBarSignInRegister from '../Components/navBarSignInRegister';

const Register = () => {
    const [registerEmail,setRegisterEmail]= useState("")
    const [registerPassword,setRegisterPassword]= useState("")
    const [loginEmail,setloginEmail]= useState("")
    const [loginPassword,setLoginPassword]= useState("")
    const [user,setUser] = useState({})
    const store = useSelector((store)=>{return store});
    const stateOfLogIn = useSelector((store)=>{return store.LogedInReducer})
    const dispatch = useDispatch();
    const [wrongDataEmail,setwrongDataEmail]= useState("undefinedEmail")
    const [wrongPassWord,setwrongPassWord]= useState("undefinedPassWord")


useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
             if(currentUser!== null){
               dispatch(loginSuccess("true"))
                dispatch(UserLoginName(user.email))
            }
    });

}, [])
    async function RegisterNew(){
        let input = document.getElementsByClassName("InputsCont")[0]
        let passInput = document.getElementsByClassName("InputsCont")
        [0].childNodes[2]

        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword)
                dispatch(loginSuccess("true"))
                setwrongDataEmail("undefinedEmail")
                setwrongPassWord("undefinedPassWord")
                input.childNodes[0].style.borderBottom = "none"
                passInput.style.borderBottom = "none"

            }
        catch(error){
            if( input.childNodes[0].value.includes("@") === false){
                setwrongDataEmail('WrongEmail')
                input.childNodes[0].style.borderBottom = "#ffa00a solid"
            }
            if(passInput.value.length < 6){
                setwrongPassWord("WrongPassWord")
                passInput.style.borderBottom = "#ffa00a solid"
            
            }
   
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
        }
    }
    const logout = async()=>{
        await signOut(auth)
        dispatch(loginSuccess("false"))

    }

    return (
        <>
        <NavBarSignInRegister />
        <div className='RegisterBodyContainer'> 
            <div className='contRegister'>
                <div className='greetInputBtn'>
                    <h1>Register</h1>
                        <div className='InputsCont'>
                            <input type="email" name="" id="" placeholder='email' onChange={(event)=>{setRegisterEmail(event.target.value)}}/>
                            <div className={wrongDataEmail}>
                                <p>Please Enter Valid Email</p>
                            </div>
                            <input
                              type="password"
                              placeholder='password' 
                              onChange={(event)=>{setRegisterPassword(event.target.value)}}
                              />
                                 <div className={wrongPassWord}>
                                <p>Please enter password longer than 6 caracter</p>
                            </div>
                            <input type="text" name="" placeholder='Name'/>
                        </div>
                        <div className='buttonCont'>
                            <button onClick={RegisterNew}>Register</button>
                        </div>           
                    </div>
                <div>
                </div>
            </div>
        </div>  

    </>
    );
}
export default Register;
