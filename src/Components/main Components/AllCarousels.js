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
    
    let left = 0;
    let right = 0 ;
    function scrollLeft(e){
        left = left + 20 ;
        const carosuel = document.getElementsByClassName('carusel OriginalNetflix')
        carosuel[0].style.left = left.toString() + "px"     }
    
    function scrollRight(e){
        right = right + 20;
        const carosuel = document.getElementsByClassName('carusel OriginalNetflix')
        carosuel[0].style.right = right.toString() + "px" 
     console.log(carosuel)
     carosuel[0].scrollLeft = right
    }
    
return (
<>
  <div>
    <button onClick={scrollLeft}> scroll</button>
  </div>
    <div className='carusel OriginalNetflix'>  
        {
        originalSeries.map((movie)=>{
        return <MovieCards 
        img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
        })
        }    
    </div>
    <div>
    <button onClick={scrollRight}> scroll</button>
  </div>
    </>
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
