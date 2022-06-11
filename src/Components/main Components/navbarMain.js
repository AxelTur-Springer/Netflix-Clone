import React from 'react';
import { Link } from 'react-router-dom';
import {signOut} from "firebase/auth"
import { auth } from "../../firebase/firebaseconfig";
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loginSuccess, logoutSuccess,UserLoginName} from "../../features/loginCheck/loginSlice"
import netflixLogo from "../../assets/logoNetNav.png"
import "../../styling/navbarMain.css"

const NavBarMain = () => {
    const dispatch = useDispatch()
    const logout = async()=>{
        await signOut(auth)
        dispatch(loginSuccess("false"))
    }
    return (
        <div className='NavBarContainerMain'>
            <div className='imghomeseriesmoviescont'>
                <div className='ImgCont'>
                    <div>
                        <img src={netflixLogo} alt="" />
                    </div>
                </div>
                    <div>
                        <Link to={"/main"} className = "link"> home </Link >
                    </div>
                    <div>
                        <Link to={"/series"} className = "link"> series </Link >
                    </div>
                    <div>
                        <Link to={"/peliculas"} className = "link"> peliculas </Link >
                    </div>
            </div>
            <div className='contSearchProfileLog'>
                <div className='searchBar'>
                    <input type="text" placeholder='titulo,series,peliculas'/>
                </div>
                <div className='profileDropDown'>
                    <div>
                        <button onClick={logout}>Log Out</button>
                    </div>
                </div>
            </div>
                   
        </div>
    );
}

export default NavBarMain;
