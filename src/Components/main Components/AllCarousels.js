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
    


    let PosicionX
    let PosicionY

    function test(e){
        const hiddenMenu = document.getElementsByClassName("HideMenu")
        if( e.target.localName === "img"){
            hiddenMenu[0].style.display = "flex"
            const element = e.target.parentElement
            PosicionX = element.getBoundingClientRect().x+ 11
            PosicionY = hiddenMenu[0].getBoundingClientRect().y
            hiddenMenu[0].style.left = PosicionX.toString() +"px"
            hiddenMenu[0].style.transform = "scale(1.1)"
            console.log(PosicionY)
        }
        


    }

    function testoUT(e){
        const hiddenMenu = document.getElementsByClassName("HideMenu")
       
            hiddenMenu[0].style.display = "none"
          
    
    }

return (
    <>
<div className='carouselContainer Netflix'>
    <h3>Originales de Netflix</h3>
    <div  className='ScrollBtn Left'>
        <button onClick={scrollLeft}> <img src={left} alt="" /></button>
    </div>
    <div className='carusel OriginalNetflix'  onMouseOver={test} onMouseLeave={testoUT}>  
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
  <div className='HideMenu'>
            {<HiddenMenu />}
        </div>
  </>
  )     

}


function MovieCards(props){
 
    return(
        <div className='MovieCardCont' >
            <div className='movieCardImgCont'>
                <img src={props.img} alt="" />
            </div>
        </div>
      
    )
}


function HiddenMenu(props){
    console.log(props)
    return(
        <div className='HiddenMenu' style={ {top: props.top}}>
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
