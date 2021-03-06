import React from 'react';
import { useState,useEffect } from 'react';
import NavBarSearch from '../Components/navbarSearch';
import {popularApi,originalSeriesapi,topRatedMovies, genresList,PopularSeries} from '../heplers/MovieApiData';
import MovieCards from '../Components/MovieCard';
import "../styling/search.css"
const Search = () => {
       

    const [all,setAll] = useState([])
    const [search,setSearch] = useState([])
    const [genres,setGeneres] = useState({genres:[]})



    useEffect(() => {
        genresList().then((data)=>{setGeneres(data) })
        async function bringAll(){
        const Pop = await popularApi()
            const resultPop = Pop.results
        const originalNet = await originalSeriesapi()
            const resultOriginal = originalNet.results
        const topMovies = await topRatedMovies()
            const resultTop = topMovies.results    
        const popTv = await PopularSeries()
            const resultpopTv = popTv.results
            
            setAll(resultPop.concat(resultOriginal).concat(resultTop).concat(resultpopTv)) 
            setSearch(resultPop.concat(resultOriginal).concat(resultTop).concat(resultpopTv))
        }
    
        bringAll()
    },[]);  
    function retrieveInputSearchValue(e){
        console.log(e)
        let search = e.target.value.toLowerCase();
    let test = all.filter((a)=>{
        if(a.name !== undefined){
            return a.name.toLowerCase().includes(search)
        } if(a.title !== undefined){
            return a.title.toLowerCase().includes(search)
        }
       
    })
    setSearch(test)

}


    return (
        <>
        <div className='SearchInSearch'>
            <NavBarSearch inputSearch = {retrieveInputSearchValue} />
        </div>
            <div className='Search-Menu-container'>
                <div>
                    <h2>Search Titles</h2>
                </div>
                <div className='Search-menu'>
                    {
                      
                  search.map((movie)=>{
                        let genera = genres.genres.filter((a)=>{
                            if(movie.genre_ids.includes(a.id)){
                                return a.name
                            }
                                })
                        return <MovieCards 
                        img={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} 
                        genero ={ genera}
                        name ={movie.title=== undefined? movie.name: movie.title}                        />
                        })
                    }    
                    </div>
                </div>
        </>
    );
}




export default Search;
