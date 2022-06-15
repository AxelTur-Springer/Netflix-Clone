import React from 'react';
import { useState,useEffect } from 'react';
import { originalSeriesapi,popularApi ,allMovies ,genresList} from '../../MovieApiData';
import right from "../../assets/right.png"
import left from "../../assets/left.png"
import play from "../../assets/playHoverMovie.png"
import like from "../../assets/like.png"
import plus from "../../assets/plus.png"
import arrowDown from "../../assets/down.png"


/*   Api Call Popular carousel example */

function CarouselPopular(){
    
    const [popular,setpopular] = useState([])
    const [genres,setGeneres] = useState([])

    useEffect(() => {
        genresList().then((data)=>{setGeneres(data) })
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
                let genera = genres.genres.filter((a)=>{
                    if(movie.genre_ids.includes(a.id)){
                        return a.name
                    }
                })
            return <MovieCards 
            img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} 
            genero ={genera}
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

/*   Api Call Netflix carousel example */
 function CarouselOriginalNet(){
    const [originalSeries,setoriginalSeries] = useState([])
    const [genres,setGeneres] = useState({genres:[]})
    useEffect(() => {
        originalSeriesapi().then((data)=>{setoriginalSeries(data.results) })
        genresList().then((data)=>{setGeneres(data) })

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
    
    console.log(genres)


    

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
                    let genera = genres.genres.filter((a)=>{
                        if(movie.genre_ids.includes(a.id)){
                            return a.name
                        }
                    })
                return <MovieCards 
                img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} 
                genero ={ genera}
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
                {<HiddenMenu genero = {props.genero} />}
        </div>
      
    )
}



function HiddenMenu(props){
    let generoArray =[];
    if(props.genero!== undefined){
    generoArray = props.genero
    } else{return}
 
    return(
        <div className='HiddenMenu' >
                    <div className='ContainerButtons'>
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
            <div className='InfoGeneres'>
                {generoArray.map((a)=>{
                    return  a.name + " "
                })}
            </div>
            </div>
           
      
    )
}


export {CarouselPopular ,CarouselOriginalNet};
