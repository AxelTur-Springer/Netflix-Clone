import React from 'react'
import { Link } from 'react-router-dom'
import netflixLogo from "../assets/logoNetNav.png"
import "../styling/navbarhome.css"

export default function NavBarHome() {
  return (
    <div className='NavBarHomeContainer'>
       <div className='ImgCont'>
                <div>
                    <img src={netflixLogo} alt="" />
                </div>
            </div>
            <div className='buttonContainer'>
                <button><Link className='link-style' to={"/login"}>Sign In </Link></button>
            </div>
                   
    </div>
  )
}
