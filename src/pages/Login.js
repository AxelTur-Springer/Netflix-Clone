import React from 'react';
import {
    createUserWithEmailAndPassword , 
    onAuthStateChanged, 
    signOut,
    signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../firebase/firebaseconfig";
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loginSuccess, logoutSuccess} from "../features/loginCheck/loginSlice"


const Login = () => {
    const [registerEmail,setRegisterEmail]= useState("")
    const [registerPassword,setRegisterPassword]= useState("")
    const [loginEmail,setloginEmail]= useState("")
    const [loginPassword,setLoginPassword]= useState("")
    const [user,setUser] = useState({})
    const store = useSelector((store)=>{return store});
    const stateOfLogIn = useSelector((store)=>{return store.LogedInReducer})
    const dispatch = useDispatch();
    console.log(store)


useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        dispatch(loginSuccess("true"))

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
        }
    }
    const logout = async()=>{
        await signOut(auth)

    }

    return (
        <div>   
            <div>
                <h3>register</h3>
                <input type="text" name="" id="" placeholder='email' onChange={(event)=>{setRegisterEmail(event.target.value)}}/>
                <input type="text" name="" id="" placeholder='password' onChange={(event)=>{setRegisterPassword(event.target.value)}}/>
                    <button onClick={Register}>Register </button>
            </div>
            <div>
                <h3>Login</h3>
                <input type="text" name="" id="" placeholder='email' onChange={(event)=>{setloginEmail(event.target.value)}}/>
                <input type="text" name="" id="" placeholder='password' onChange={(event)=>{setLoginPassword(event.target.value)}}/>
                <button onClick={login}>login</button>
            </div>
            {user ? user.email : "Not Logged In"}
            <dir>
                <button onClick={logout}>signOut</button>
            </dir>
        </div>
    );
}

export default Login;
