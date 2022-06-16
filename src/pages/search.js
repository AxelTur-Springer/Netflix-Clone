import React from 'react';
import { useState,useEffect } from 'react';
import NavBarMain from '../Components/main Components/navbarMain'; 
import { originalSeriesapi,popularApi ,allMovies ,genresList} from '../MovieApiData';
import MovieCards from '../Components/MovieCard';
import "../styling/search.css"
const Search = () => {
       
    const [popular,setpopular] = useState([])
    const [originalSeries,setoriginalSeries] = useState([])
    const [all,setAll] = useState([])
    const [genres,setGeneres] = useState({genres:[]})


    useEffect(() => {
        popularApi().then((data)=>{setpopular(data.results) })
        originalSeriesapi().then((data)=>{setoriginalSeries(data.results) })
        genresList().then((data)=>{setGeneres(data) })
        setAll(popular.concat(originalSeries))
    },[]);  
    console.log(all)
    return (
        <>
      <NavBarMain />
            <div className='Search-menu'>
                {
                all.map((movie)=>{
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
        </>
    );
}




export default Search;
