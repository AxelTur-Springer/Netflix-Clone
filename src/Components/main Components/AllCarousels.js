import React from 'react';
import { useState,useEffect } from 'react';
import { originalSeriesapi,popularApi ,allMovies} from '../../MovieApiData';
   


function CarouselPopular(){
    
    const [popular,setpopular] = useState([])


    useEffect(() => {
        popularApi().then((data)=>{setpopular(data.results) })
    },[]);  

return (
    <div className='carusel Popular'>
        {
        popular.map((movie)=>{
        return <MovieCards 
        img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
        })
        }    
    </div>
)     

}


function CarouselOriginalNet(){
    
    const [originalSeries,setoriginalSeries] = useState([])


    useEffect(() => {
        originalSeriesapi().then((data)=>{setoriginalSeries(data.results) })
    },[]);  
    
return (
    <div className='carusel OriginalNetflix'>
        {
        originalSeries.map((movie)=>{
        return <MovieCards 
        img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
        })
        }    
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

export {CarouselPopular ,CarouselOriginalNet};
