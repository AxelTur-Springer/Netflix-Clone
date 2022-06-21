import React from 'react';
import { useState,useEffect } from 'react';
import { originalSeriesapi,popularApi ,allMovies,topRatedMovies ,genresList,PopularSeries} from '../../MovieApiData';
import right from "../../assets/right.png"
import left from "../../assets/left.png"
import MovieCards from '../MovieCard';

/*   Api Call Popular carousel example */

function CarouselPopular(){
    
    const [popular,setpopular] = useState([])
    const [genres,setGeneres] = useState({genres:[]})

    useEffect(() => {
        genresList().then((data)=>{setGeneres(data) })
        popularApi().then((data)=>{setpopular(data.results) })

    },[]);  
    let scroll = 0;

    function scrollLeft(e){
        const carosuel = document.getElementsByClassName('carouselContainer Popular')
        let widthImg= document.getElementsByClassName("MovieCardCont")[0].getBoundingClientRect().width
        if(scroll === 0){
            scroll = 0 
        }else {
            scroll -= widthImg;
        }
        carosuel[0].scrollTo({ left: scroll, behavior: 'smooth' })
    }
    
    function scrollRight(e){
        const carosuel = document.getElementsByClassName('carouselContainer Popular')
        let widthImg= document.getElementsByClassName("MovieCardCont")[0].getBoundingClientRect().width
        if(scroll >  carosuel[0].scrollWidth - 1000 ){
            scroll = 0
        }else{
            scroll = scroll + widthImg ;
        }
        carosuel[0].scrollTo({ left: scroll, behavior: 'smooth' })
    }
    
return (
    <div className='AllMightContainer'>
        <h2>Populares Ahora</h2>

 <div  className='ScrollBtn Left'>
        <button onClick={scrollLeft}><img src={left} alt="" /></button>
    </div>
<div className='carouselContainer Popular'>
   
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
            name ={movie.title=== undefined? movie.name: movie.title}
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
        let widthImg= document.getElementsByClassName("MovieCardCont")[0].getBoundingClientRect().width
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
        let widthImg= document.getElementsByClassName("MovieCardCont")[0].getBoundingClientRect().width
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
                <h2>Originales de Netflix</h2>

          <div  className='ScrollBtn Left'>
            <button onClick={scrollLeft}> <img src={left} alt="" /></button>
        </div>
        <div className='carouselContainer Netflix'>

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
                name ={movie.title=== undefined? movie.name: movie.title}
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



function CarouselTopRatedMovies(){
    const [TopRatedMovies,setTopRatedMovies] = useState([])
    const [genres,setGeneres] = useState({genres:[]})
    useEffect(() => {
        topRatedMovies().then((data)=>{setTopRatedMovies(data.results) })
        genresList().then((data)=>{setGeneres(data) })

    },[]);  
    
    let scroll = 0;

    function scrollLeft(e){
        const carosuel = document.getElementsByClassName('carouselContainer topRated')
        let widthImg= document.getElementsByClassName("MovieCardCont")[0].getBoundingClientRect().width
        if(scroll === 0){
            scroll = 0 
        }else {
            scroll -= widthImg;
        }
        carosuel[0].scrollTo({ left: scroll, behavior: 'smooth' })
    }
    
    function scrollRight(e){
        const carosuel = document.getElementsByClassName('carouselContainer topRated')
        let widthImg= document.getElementsByClassName("MovieCardCont")[0].getBoundingClientRect().width
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
                <h2>Mejores Puntuadas</h2>

          <div  className='ScrollBtn Left'>
            <button onClick={scrollLeft}> <img src={left} alt="" /></button>
        </div>
        <div className='carouselContainer topRated'>

        <div className='carusel topRated' >  
      
            {
                TopRatedMovies.map((movie)=>{
                    let genera = genres.genres.filter((a)=>{
                        if(movie.genre_ids.includes(a.id)){
                            return a.name
                        }
                    })
                return <MovieCards 
                img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} 
                genero ={ genera}
                name ={movie.title=== undefined? movie.name: movie.title}
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

function CarouselPopularSeries(){
    const [PopularSeriesState,setPopularSeriesState] = useState([])
    const [genres,setGeneres] = useState({genres:[]})
    useEffect(() => {
        PopularSeries().then((data)=>{setPopularSeriesState(data.results) })
        genresList().then((data)=>{setGeneres(data) })

    },[]);  
    
    let scroll = 0;

    function scrollLeft(e){
        const carosuel = document.getElementsByClassName('carouselContainer PopularSeries')
        let widthImg= document.getElementsByClassName("MovieCardCont")[0].getBoundingClientRect().width
        if(scroll === 0){
            scroll = 0 
        }else {
            scroll -= widthImg;
        }
        carosuel[0].scrollTo({ left: scroll, behavior: 'smooth' })
    }
    
    function scrollRight(e){
        const carosuel = document.getElementsByClassName('carouselContainer PopularSeries')
        let widthImg= document.getElementsByClassName("MovieCardCont")[0].getBoundingClientRect().width
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
                <h2>Series Populares</h2>

          <div  className='ScrollBtn Left'>
            <button onClick={scrollLeft}> <img src={left} alt="" /></button>
        </div>
        <div className='carouselContainer PopularSeries'>

        <div className='carusel PopularSeries' >  
      
            {
                PopularSeriesState.map((movie)=>{
                    let genera = genres.genres.filter((a)=>{
                        if(movie.genre_ids.includes(a.id)){
                            return a.name
                        }
                    })
                return <MovieCards 
                img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} 
                genero ={ genera}
                name ={movie.title=== undefined? movie.name: movie.title}
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



export {CarouselPopular ,CarouselOriginalNet,CarouselTopRatedMovies,CarouselPopularSeries};
