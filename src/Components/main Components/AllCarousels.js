import React from 'react';
import { useState,useEffect } from 'react';
import { originalSeriesapi,popularApi ,allMovies} from '../../MovieApiData';
import right from "../../assets/right.png"
import left from "../../assets/left.png"


function CarouselPopular(){
    
    const [popular,setpopular] = useState([])


    useEffect(() => {
        popularApi().then((data)=>{setpopular(data.results) })
    },[]);  

    let scroll = 0;

    function scrollLeft(e){
        const carosuel = document.getElementsByClassName('carusel Popular')
        let widthImg= carosuel[0].firstElementChild.getBoundingClientRect().width +15;
        if(scroll === 0){
            scroll = 0 
        }else {
            scroll -= widthImg;
        }
        carosuel[0].scrollTo({ left: scroll, behavior: 'smooth' })
      
    }
    
    function scrollRight(e){
        const carosuel = document.getElementsByClassName('carusel Popular')
        let widthImg= carosuel[0].firstElementChild.getBoundingClientRect().width
        if(scroll > scroll >  carosuel[0].scrollWidth - 1000 ){
            scroll = 0
        }else{
            scroll = scroll + widthImg ;
        }
        carosuel[0].scrollTo({ left: scroll, behavior: 'smooth' })
    }
    
return (
<div className='carouselContainer Popular'>
    <h3>Populares Ahora</h3>
    <div  className='ScrollBtn Left'>
        <button onClick={scrollLeft}><img src={left} alt="" /></button>
    </div>
    <div className='carusel Popular'>  
        {
            popular.map((movie)=>{
            return <MovieCards 
            img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
            })
        }    
    </div>
    <div className='ScrollBtn Right' >
        <button onClick={scrollRight}> <img src={right} alt="" /></button>
    </div>
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
        console.log(carosuel)
        let widthImg= carosuel[0].firstElementChild.getBoundingClientRect().width
        if(scroll >  carosuel[0].scrollWidth - 1000 ){
            scroll = 0
        }else{
            scroll = scroll + widthImg ;
        }
        carosuel[0].scrollTo({ left: scroll, behavior: 'smooth' })
    }
    
return (
<div className='carouselContainer Netflix'>
    <h3>Originales de Netflix</h3>
    <div  className='ScrollBtn Left'>
        <button onClick={scrollLeft}> <img src={left} alt="" /></button>
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
        <button onClick={scrollRight}> <img src={right} alt="" /></button>
    </div>
  </div>
  )     

}




function MovieCards(props){
    function test(e){
        let main = e.currentTarget.childNodes[0]

        let test = e.currentTarget.childNodes[1]
        setTimeout(() => {
            test.style.display ="flex"
            main.style.transform = "scale(1.2)"
        }, 1000);
    }
    function testoUT(e){
        let test = e.currentTarget.childNodes[1]
        test.style.display ="none"
    }
    return(
        <div className='MovieCardCont'  onMouseOver={test} onMouseLeave={testoUT}>
            <div className='movieCardImgCont'>
                <img src={props.img} alt="" />
            </div>
            <div className='HiddenMenu'>
                    <div className='playAddColection'>
                        <div>
                            <button>Play</button>
                        </div>
                        <div>
                            <button>Add Colection</button>
                        </div>
                        <div>
                            <button>Like</button>
                        </div>
                    </div>
                    <div className='SeeMore'>
                        <div>
                            <button>See More</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

function MovieCardPrev(){
    return(
        <div>
            helloooo
        </div>
    )
}

export {CarouselPopular ,CarouselOriginalNet};
