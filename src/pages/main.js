import React from 'react';
import { useState,useEffect } from 'react';
import NavBar from '../Components/NavBar';
import "../styling/main.css"
import { originalSeriesapi,popularApi ,allMovies} from '../MovieApiData';
import randomNetflixMovies from '../randomMovieObj';
const Main = () => {
    const [originalSeries,setoriginalSeries] = useState([])
    const [popular,setpopular] = useState([])
    const [randomOriginalNet,setrandomOriginalNet] = useState([])

    const API_KEY = "076a8aeadc245f1cbc3779685ceb3a1d";
    
    useEffect(() => {
        originalSeriesapi().then((data)=>{setoriginalSeries(data.results) })
        popularApi().then((data)=>{setpopular(data.results) })
        testing()
    },[]);




function testing(){
    let arrayOfPreviewsCompo =[];
    let x = 0;

    for(let i = 0 ; i< randomNetflixMovies().length ; i++){
        arrayOfPreviewsCompo.push(
            <PreviewMenu 
            img ={"https://image.tmdb.org/t/p/w1280" + 
            randomNetflixMovies()[i].backdrop_path} />
        )
    }
    setrandomOriginalNet(arrayOfPreviewsCompo[x])
    setInterval(() => {
        x === 20 ? x = 0 : x+=1
        console.log(x)
        setrandomOriginalNet(arrayOfPreviewsCompo[x])
    }, 5000);
}

    return (
        <>
      <NavBar />

            <div className='Main-menu'>
                <div className='preview-menu'>
                    {randomOriginalNet}          
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
