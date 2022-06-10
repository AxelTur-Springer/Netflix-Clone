import React from 'react';
import { useState,useEffect } from 'react';
import NavBar from '../Components/NavBar';
import "../styling/main.css"
//import { getMovieList ,apiimg } from '../MovieApiData';
import { originalSeriesapi,popularApi } from '../MovieApiData';

const Main = () => {
    const [AllmoviesSeries,setAllmoviesSeries] = useState([])
    const [originalSeries,setoriginalSeries] = useState([])
    const [popular,setpopular] = useState([])
    const API_KEY = "076a8aeadc245f1cbc3779685ceb3a1d";
    useEffect(() => {
     originalSeriesapi().then((data)=>{setoriginalSeries(data.results) })
     popularApi().then((data)=>{setpopular(data.results) })
     setAllmoviesSeries([...originalSeries,...popular])
     console.log(AllmoviesSeries)
    }, []);
    
    let x = Math.floor((Math.random() * 40) + 1);
    return (
        <>
            <NavBar />
            <div className='Main-menu'>
                <div className='preview-menu'>
                <PreviewMenu img ={    AllmoviesSeries[x] === undefined ? null : "https://image.tmdb.org/t/p/w500" +AllmoviesSeries[x].backdrop_path }/>
            
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
        <div>
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
