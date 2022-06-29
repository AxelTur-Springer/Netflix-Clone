import React from 'react';
import NavBarMain from '../Components/main Components/navbarMain'; 
import "../styling/main.css"
import { BilboardMain } from '../Components/main Components/BilboardIntro';
import { CarouselPopular ,CarouselOriginalNet,CarouselTopRatedMovies,CarouselPopularSeries } from '../Components/main Components/AllCarousels';
import { auth } from "../firebase/firebaseconfig";
import { getDatabase, ref, onValue} from "firebase/database";
import { test } from '../heplers/bringUserName';
import { getUid } from '../heplers/bringUserName';
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
