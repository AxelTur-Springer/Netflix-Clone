import React from 'react';
import { Link } from 'react-router-dom';
import {signOut} from "firebase/auth"
import { auth } from "../firebase/firebaseconfig";
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loginSuccess, logoutSuccess,UserLoginName} from "../features/loginCheck/loginSlice"
import "../styling/navbar.css"
import netflixLogo from "../assets/logoNetNav.png"

const NavBar = () => {
    const dispatch = useDispatch()
    const logout = async()=>{
        await signOut(auth)
        dispatch(loginSuccess("false"))
    }
    return (
        <div className='NavBarContainer'>
            <div className='ImgCont'>
                <div>
                    <img src={netflixLogo} alt="" />
                </div>
            </div>
            <div>
                <button><Link to={"/login"}>Login </Link></button>
                <button onClick={logout}>Log Out</button>
            </div>
                   
        </div>
    );
}

export default NavBar;
