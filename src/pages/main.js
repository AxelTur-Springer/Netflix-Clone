import React from 'react';
import { useState,useEffect } from 'react';
import NavBar from '../Components/NavBar';
import "../styling/main.css"
import { originalSeriesapi,popularApi ,allMovies} from '../MovieApiData';
import { BilboardMain } from '../Components/main Components/BilboardIntro';
const Main = () => {
    const [originalSeries,setoriginalSeries] = useState([])
    const [popular,setpopular] = useState([])

    const API_KEY = "076a8aeadc245f1cbc3779685ceb3a1d";
    
    useEffect(() => {
        originalSeriesapi().then((data)=>{setoriginalSeries(data.results) })
        popularApi().then((data)=>{setpopular(data.results) })
    },[]);






    return (
        <>
      <NavBar />
            <div className='Main-menu'>
                 <BilboardMain/>        
                <div className='categories'>
                    <div className='carusel OriginalSeries'>
                            {
                            originalSeries.map((movie)=>{
                            return <MovieCards 
                            img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
                            })
                            }
                    </div>   
                    <div className='carusel Popular'>
                            {
                            popular.map((movie)=>{
                            return <MovieCards 
                            img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
                            })
                            }
                    </div>      
                </div>
            </div>
        </>
    );
}


function PreviewMenu(props){
    return(
        <div className='previewMenu'>
            <img src={props.img} alt="" />
        </div>
    )
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
