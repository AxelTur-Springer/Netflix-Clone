import React from 'react';
import { useState,useEffect } from 'react';
import NavBar from '../Components/NavBar';
import "../styling/main.css"
//import { getMovieList ,apiimg } from '../MovieApiData';
import { originalSeriesapi,popularApi ,allMovies} from '../MovieApiData';
import randomNetflixMovies from '../randomMovieObj';
const Main = () => {
    const [originalSeries,setoriginalSeries] = useState([])
    const [popular,setpopular] = useState([])


    const API_KEY = "076a8aeadc245f1cbc3779685ceb3a1d";
    useEffect(() => {
        originalSeriesapi().then((data)=>{setoriginalSeries(data.results) })
        popularApi().then((data)=>{setpopular(data.results) })
        console.log(originalSeries)
    },[]);

console.log(randomNetflixMovies())
    return (
        <>
            <NavBar />
            <div className='Main-menu'>
                <div className='preview-menu'>
                { originalSeries.filter((movie)=>{
                            return movie.name === "Stranger Things"
                }
                ).map((movie)=>{
                    return <PreviewMenu 
                    img={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path} />
                    })
            }
                            
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
