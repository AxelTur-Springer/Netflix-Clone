import React from 'react';
import { useState,useEffect } from 'react';
import NavBarMain from '../Components/main Components/navbarMain'; 
import "../styling/main.css"
import { BilboardMain } from '../Components/main Components/BilboardIntro';
import { CarouselPopular ,CarouselOriginalNet,CarouselTopRatedMovies,CarouselPopularSeries } from '../Components/main Components/AllCarousels';
const Main = () => {
   
    

    return (
        <>
      <NavBarMain />
            <div className='Main-menu'>
                 <BilboardMain/>        
                <div className='categories'>
                           <CarouselOriginalNet />
                            <CarouselPopular />
                            <CarouselTopRatedMovies/>
                            <CarouselPopularSeries />
                </div>
            </div>
        </>
    );
}




export default Main;
