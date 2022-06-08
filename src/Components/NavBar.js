import React from 'react';
import { Link } from 'react-router-dom';
import {signOut} from "firebase/auth"
import { auth } from "../firebase/firebaseconfig";
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loginSuccess, logoutSuccess,UserLoginName} from "../features/loginCheck/loginSlice"


const NavBar = () => {
    const dispatch = useDispatch()
    const logout = async()=>{
        await signOut(auth)
        dispatch(loginSuccess("false"))
    }
    return (
        <div>
           <button>
            <Link to={"/"}>Home </Link></button>
            <button><Link to={"/login"}>Login </Link></button>
            <button onClick={logout}>Log Out</button>
        </div>
    );
}

export default NavBar;
