import React from 'react'
import { Link } from 'react-router-dom'
import netflixLogo from "../assets/logoNetNav.png"
import "../styling/NavBarSignInRegister.css"

export default function NavBarSignInRegister() {
  return (
    <div className='NavBarSignInRegisterContainer'>
       <div className='ImgCont'>
                <div>
                    <img src={netflixLogo} alt="" />
                </div>
            </div>
           
    </div>
  )
}
