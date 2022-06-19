import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {signOut} from "firebase/auth"
import { auth } from "../../firebase/firebaseconfig";
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from "../../app/store";
import {loginSuccess, logoutSuccess,UserLoginName} from "../../features/loginCheck/loginSlice"
import netflixLogo from "../../assets/logoNetNav.png"
import profileImg from "../../assets/iconProfile.png"
import arrow from "../../assets/play.png"
import lupa from "../../assets/search.png"
import "../../styling/navbarMain.css"
import {valueChange} from "../../features/valueSearch"


const NavBarMain = (props) => {
    const [search,setSearch] = useState()

    const navigate = useNavigate()
    const Store = useSelector((store)=>{return store})
    const dispatch = useDispatch()
    const logout = async()=>{
        await signOut(auth)
        dispatch(loginSuccess("false"))
    }

    function displayMenu(e){

                const menu = document.getElementsByClassName("DropDown")
        const arrow = document.getElementsByClassName("arrow")
        arrow[0].style.transform = "rotate(90deg)"
        menu[0].style.display= "flex"
    }
    function hideMenu(e){

                const menu = document.getElementsByClassName("DropDown")
                const arrow = document.getElementsByClassName("arrow")
                arrow[0].style.transform = "rotate(270deg)"
                menu[0].style.display= "none"
             
       
    }
    function redirect(){
        navigate("/search")
    }
    function setting(e){
        props.inputSearch(e)
     
    }
    function showSearchBar(e){
        console.log(e)
        let searchanime = document.getElementsByClassName("inputCont")[0]
        searchanime.childNodes[0].style.animation ="searchBarAnimacionShow 1s forwards"
    }
    function hideSearchBar(e){
        let searchanime = document.getElementsByClassName("inputCont")[0]

            searchanime.childNodes[0].style.animation ="searchBarAnimacionHide 1s forwards"

        



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
                        <Link to={"/main"} className = "link"> Home </Link >
                    </div>
                    <div>
                        <Link to={"/series"} className = "link"> Series </Link >
                    </div>
                    <div>
                        <Link to={"/peliculas"} className = "link"> Peliculas </Link >
                    </div>
            </div>
            <div className='contSearchProfileLog'>
                <div className='searchBarCont'>
                    <div className='lupita'  onMouseOver={showSearchBar}  onMouseLeave={hideSearchBar} >
                        <img src={lupa} alt="" />
                    </div>
                    <div className='inputCont' onMouseLeave={hideSearchBar} onMouseOver={showSearchBar}
                    onClick={redirect}>
                        <input
                            onChange = {setting }
                            type="text" placeholder='titulo,series,peliculas'/>
                    </div>
                </div>
                <div className='profileDropDown' onMouseOver={displayMenu}  >
                    <div className='Profile'>
                        <div>
                            <img src={profileImg} alt="" />
                        </div>
                        <div className='arrow'>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <div className='DropDown' onMouseLeave={hideMenu} >
                        <button onClick={logout}>Log Out</button>
                    </div>
                </div>
            </div>
                   
        </div>
    );
}

export default NavBarMain;
