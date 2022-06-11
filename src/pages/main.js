import React from 'react';
import { useState,useEffect } from 'react';
import NavBarMain from '../Components/main Components/navbarMain'; 
import "../styling/main.css"
import { BilboardMain } from '../Components/main Components/BilboardIntro';
import { CarouselPopular ,CarouselOriginalNet } from '../Components/main Components/AllCarousels';
const Main = () => {
   
    

    return (
        <>
      <NavBarMain />
            <div className='Main-menu'>
                 <BilboardMain/>        
                <div className='categories'>
                
                           <CarouselOriginalNet />

                    <div className='carusel Popular'>
                       <CarouselPopular />
                    </div>      
                </div>
            </div>
        </>
    );
}




export default Main;
