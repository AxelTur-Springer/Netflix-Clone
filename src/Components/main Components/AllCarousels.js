import React from 'react';
import { useState,useEffect } from 'react';
import { originalSeriesapi,popularApi ,allMovies} from '../../MovieApiData';
import right from "../../assets/right.png"
import left from "../../assets/left.png"
import play from "../../assets/playHoverMovie.png"
import like from "../../assets/like.png"
import plus from "../../assets/plus.png"
import arrowDown from "../../assets/down.png"


/*   Api Call Popular carousel example */

function CarouselPopular(){
    
    const [popular,setpopular] = useState([])


    useEffect(() => {
        popularApi().then((data)=>{setpopular(data.results) })
    },[]);  

    let scroll = 0;

    function scrollLeft(e){
        const carosuel = document.getElementsByClassName('carouselContainer Popular')
        let widthImg= carosuel[0].getBoundingClientRect().width
        if(scroll === 0){
            scroll = 0 
        }else {
            scroll -= widthImg;
        }
        carosuel[0].scrollTo({ left: scroll, behavior: 'smooth' })
    }
    
    function scrollRight(e){
        const carosuel = document.getElementsByClassName('carouselContainer Popular')
        let widthImg= carosuel[0].firstElementChild.getBoundingClientRect().width
        if(scroll >  carosuel[0].scrollWidth - 1000 ){
            scroll = 0
        }else{
            scroll = scroll + widthImg ;
        }
        carosuel[0].scrollTo({ left: scroll, behavior: 'smooth' })
    }
    
return (
    <div className='AllMightContainer'>
 <div  className='ScrollBtn Left'>
        <button onClick={scrollLeft}><img src={left} alt="" /></button>
    </div>
<div className='carouselContainer Popular'>
    <h3>Populares Ahora</h3>
   
    <div className='carusel Popular'>  
        {
            popular.map((movie)=>{
            return <MovieCards 
            img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
            })
        }    
    </div>
   
  </div>
  <div className='ScrollBtn Right' >
        <button onClick={scrollRight}> <img src={right} alt="" /></button>
    </div>
  </div>

  )     

}

/*   Api Call Netflix carousel example */
 function CarouselOriginalNet(){
    const [originalSeries,setoriginalSeries] = useState([])

    useEffect(() => {
        originalSeriesapi().then((data)=>{setoriginalSeries(data.results) })
    },[]);  
    
    let scroll = 0;

    function scrollLeft(e){
        const carosuel = document.getElementsByClassName('carouselContainer Netflix')
        let widthImg= carosuel[0].getBoundingClientRect().width
        if(scroll === 0){
            scroll = 0 
        }else {
            scroll -= widthImg;
        }
        carosuel[0].scrollTo({ left: scroll, behavior: 'smooth' })
        console.log(carosuel)
    }
    
    function scrollRight(e){
        const carosuel = document.getElementsByClassName('carouselContainer Netflix')
        let widthImg= carosuel[0].firstElementChild.getBoundingClientRect().width
        if(scroll >  carosuel[0].scrollWidth - 1000 ){
            scroll = 0
        }else{
            scroll = scroll + widthImg ;
        }
        carosuel[0].scrollTo({ left: scroll, behavior: 'smooth' })
    }
    


    

return (
    <div className='AllMightContainer'>
          <div  className='ScrollBtn Left'>
            <button onClick={scrollLeft}> <img src={left} alt="" /></button>
        </div>
        <div className='carouselContainer Netflix'>
        <h3>Originales de Netflix</h3>
    
        <div className='carusel OriginalNetflix' >  
      
            {
                originalSeries.map((movie)=>{
                return <MovieCards 
                img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                />
                })
            }    
          
        </div>
    
    </div>   
    <div className='ScrollBtn Right' >
            <button onClick={scrollRight}> <img src={right} alt="" /></button>
        </div> 
  </div>
  )     

}





function MovieCards(props){
 function showMenu(e){
    console.log()
    e.currentTarget.childNodes[1].style.display ="flex"
}
function hideMenu(e){
    console.log()
    e.currentTarget.childNodes[1].style.display ="none"
}
    return(
        <div className='MovieCardCont'  onMouseEnter={showMenu} onMouseLeave={hideMenu}  >
            <div className='movieCardImgCont'>
                <img src={props.img} alt="" />
            </div>
                {<HiddenMenu />}
        </div>
      
    )
}



function HiddenMenu(props){

    return(
        <div className='HiddenMenu' >
            <div className='playAddColection'>
                <div>
                    <button>
                        <div className='playImgCont'>
                            <img src={play} alt="" />
                        </div>
                    </button>
                </div>
                <div>
                    <button>
                        <div>
                            <img src={like} alt="" />
                        </div>
                    </button>
                </div>
                <div>
                    <button>
                        <div>
                            <img src={plus} alt="" />
                        </div>
                    </button>
                </div>
            </div>
            <div className='SeeMore'>
                <div>
                    <button>
                        <div>
                            <img src={arrowDown} alt="" />
                        </div>
                    </button>
                </div>
            </div>
</div>
    )
}


export {CarouselPopular ,CarouselOriginalNet};
