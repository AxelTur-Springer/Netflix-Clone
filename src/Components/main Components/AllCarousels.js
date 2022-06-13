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
    
    let scroll = 0;

    function scrollLeft(e){
        const carosuel = document.getElementsByClassName('carusel OriginalNetflix')
        let widthImg= carosuel[0].firstElementChild.getBoundingClientRect().width
        if(scroll === 0){
            scroll = 0 
        }else {
            scroll -= widthImg;
        }
        carosuel[0].scrollTo({ left: scroll, behavior: 'smooth' })
      
    }
    
    function scrollRight(e){
        const carosuel = document.getElementsByClassName('carusel OriginalNetflix')
        let widthImg= carosuel[0].firstElementChild.getBoundingClientRect().width
        console.log(carosuel[0].firstElementChild.getBoundingClientRect().width)
        if(scroll > 3000){
            scroll = 0
        }else{
            scroll = scroll + widthImg ;
        }
        carosuel[0].scrollTo({ left: scroll, behavior: 'smooth' })
    }
    
return (
<div>
    <div  className='ScrollBtn Left'>
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
    <div className='ScrollBtn Right' >
        <button onClick={scrollRight}> scroll</button>
    </div>
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
