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
import helpIcon from "../../assets/informacion.png"
import userIcon from "../../assets/user.png"
import editIcon from "../../assets/edit.png"
import "../../styling/navbarMain.css"
import {valueChange} from "../../features/valueSearch"


const NavBarMain = (props) => {
    const navigate = useNavigate()
    const Store = useSelector((store)=>{return store})
    const dispatch = useDispatch()
    
    useEffect(() => {

    }, []);

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
    function redirect(e){
        navigate("/search")
    }
    function setting(e){
        props.inputSearch(e)
     
    }
    function showSearchBar(e){
         let searchanime = document.getElementsByClassName("inputCont")[0]
            if(searchanime.childNodes[1].style.animation === "0s ease 0s 1 normal forwards running searchBarAnimacionShow"){
            }
            else{
                searchanime.childNodes[1].style.animation ="searchBarAnimacionShow 0s forwards"
            }  
    }
    function hideSearchBar(e){
        let searchanime = document.getElementsByClassName("inputCont")[0]
        searchanime.childNodes[1].style.animation ="searchBarAnimacionHide 1s forwards"
    }
    function ShowExploreMenu(e){
        const arrow = document.getElementsByClassName("ArrowForExplorar")
        let dropDownExplore = document.getElementsByClassName("DropDown")[0]
        if( dropDownExplore.style.display === "flex"){
            arrow[0].style.animation = "rotateArrowUp 1s forwards "            
            dropDownExplore.style.animation= "dropDownExplorehide 0.5s forwards"
            setTimeout(() => {
                dropDownExplore.style.display ="none"
            }, 500);

        }else{
            dropDownExplore.style.animation= "dropDownExploreShow 0.5s forwards"
            dropDownExplore.style.display= "flex"
            arrow[0].style.animation = "rotateArrowDown 1s forwards "

        }
        
 
       
   }
    return (
        <div className='NavBarContainerMain'>
            <div className='imghomeseriesmoviescont'>
                <div className='ImgCont'>
                    <div>
                        <Link to={"/main"}>
                            <img src={netflixLogo} alt="" />
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='HomeSeriesMoviesCont'>
                        <div>
                            <Link to={"/main"} className = "link"> Home </Link >
                        </div>
                      
                        <div>
                            <Link to={"/series"} className = "link"> Series </Link >
                        </div>
                        <div>
                            <Link to={"/Movies"} className = "link"> Peliculas </Link >
                        </div>
                    </div>
                    <div className='HomeSeriesMoviesMobileCont'>
                        <div className='IconStatic' onClick={ShowExploreMenu}>
                            <div>
                                <p>Explorar</p>
                            </div>
                            <div className='ArrowForExplorar'>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                        <div className='DropDown'>
                            <div>
                                <Link to={"/main"} className = "link"> Home </Link >
                            </div>
                        
                            <div>
                                <Link to={"/series"} className = "link"> Series </Link >
                            </div>
                            <div>
                                <Link to={"/Movies"} className = "link"> Peliculas </Link >
                            </div>
                        </div>
                    </div>
                </div>
                   
            </div>
            <div className='contSearchProfileLog'>
                <div className='searchBarCont'>
                    <div className='inputCont' 
                    onMouseLeave={hideSearchBar} 
                    onMouseOver={showSearchBar}
                    onClick={redirect}>
                         <div className='lupita'    >
                            <img src={lupa} alt="" />
                        </div>
                        <input

                            onChange = {setting }
                            type="text" placeholder='titulo,series,peliculas'/>
                    </div>
                </div>
                <div className='profileDropDown' onMouseOver={displayMenu}  onMouseLeave={hideMenu} >
                    <div className='Profile'>
                        <div>
                            <img src={profileImg} alt="" />
                        </div>
                        <div className='arrow'>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <div className='DropDown' onMouseLeave={hideMenu} onMouseOver={displayMenu} >
                        <div className='All'>
                            <div className=' UsersContainer'>
                                <div className='once Users'>
                                    <div> 
                                        <img src={profileImg} alt="" />
                                    </div>
                                    <div>
                                        <p> Users Name</p>
                                    </div>
                                </div>
                                <div className='once'>
                                    <div>
                                        <img src={editIcon} alt="" />
                                    </div>
                                    <div>
                                        <p>Administer Users</p>
                                    </div>
                                </div>
                            </div>
                            <div className='AccountHelp'>
                                <div className='once'>
                                    <div>
                                        <img src={userIcon} alt="" />
                                    </div>
                                    <div>
                                        <p>Account</p>
                                    </div>
                                </div>
                                <div className='once'>
                                    <div>
                                        <img src={helpIcon} alt="" />
                                    </div>
                                    <div>
                                        <p>Help Center</p>
                                    </div>
                                </div>
                            </div>
                            <div className='logOut'>
                                <button onClick={logout}>Log out of Netflix</button>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
                   
        </div>
    );
}

export default NavBarMain;
