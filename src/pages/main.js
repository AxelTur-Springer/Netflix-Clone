import React from 'react';
import { useState,useEffect } from 'react';
import NavBar from '../Components/NavBar';
import "../styling/main.css"
//import { getMovieList ,apiimg } from '../MovieApiData';
import { originalSeriesapi } from '../MovieApiData';

const Main = () => {
    const [originalSeries,setoriginalSeries] = useState([])
    const API_KEY = "076a8aeadc245f1cbc3779685ceb3a1d";
    useEffect(() => {
     originalSeriesapi().then((data)=>{setoriginalSeries(data.results) })
         
    }, []);
   
    return (
        <div>
            <NavBar />
            <div className='preview-menu'>
                preview
            </div>
            <div className='categories'>
                <div className='carusel OriginalSeries'>
                {
               originalSeries.map((movie)=>{
                return <MovieCards 
                img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
                })
            }
                </div>         
            </div>
        </div>
    );
}



function MovieCards(props){
    function test(e){
        console.log()
    }
    return(
        <div className='movieCardImgCont' onMouseOver={test}>
            <img src={props.img} alt="" />
        </div>
    )
}

export default Main;
