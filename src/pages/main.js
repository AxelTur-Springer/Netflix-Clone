import React from 'react';
import { useState,useEffect } from 'react';
import NavBar from '../Components/NavBar';
//import { getMovieList ,apiimg } from '../MovieApiData';

const Main = () => {
    const [movies,setMovies] = useState([])
    const API_KEY = "076a8aeadc245f1cbc3779685ceb3a1d";
    useEffect(() => {
        async function getMovieList() {
            try{
              let response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`)
              let data = await response.json();
                setMovies(data.results)
            }catch(err){
              console.error(err);
            }
          }
          getMovieList()
    }, []);
   
    return (
        <div>
            <NavBar />
            <div className='preview-menu'>
                preview
            </div>
            <div className='categories'>
            
           {movies.map((movie)=>{
            return <MovieCards img={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
           })}
            </div>
        </div>
    );
}

function MovieCards(props){
    return(
        <div>
            <img src={props.img} alt="" />
        </div>
    )
}

export default Main;
