import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import NavBarMain from '../Components/main Components/navbarMain'; 
import {originalSeriesapi, genresList,PopularSeries} from '../MovieApiData';
import MovieCards from '../Components/MovieCard';
import "../styling/seriesAndMovie.css"
const Series = () => {
       
    const [popular,setpopular] = useState([])
    const [originalSeries,setoriginalSeries] = useState([])
    const [topMovies,setTopMovies] = useState([])
    const [tvSeries,setTvSeries] = useState([])
    const [all,setAll] = useState([])
    const [search,setSearch] = useState([])
    const [filtered,setFiltered] = useState([])
    const [genres,setGeneres] = useState({genres:[]})

    const navigate = useNavigate()


    useEffect(() => {
        genresList().then((data)=>{setGeneres(data) })
        async function bringAll(){
       
        const originalNet = await originalSeriesapi()
            const resultOriginal = originalNet.results
       
        const popTv = await PopularSeries()
            const resultpopTv = popTv.results
            
            setAll(resultpopTv.concat(resultOriginal))
            setSearch(resultpopTv.concat(resultOriginal))
        }
    
        bringAll()
    },[]);  
    function retrieveInputSearchValue(e){
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

function filterByGenre(e){
   let genre = e.target.innerText
    let movieCards = 
        search.map((movie)=>{
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
let filterd = 
movieCards.filter((a)=>{
    for(let i = 0 ; i< a.props.genero.length;i++){
         return a.props.genero[i].name === genre
    }
})
setFiltered(filterd)
}
function showFilterMenu(){
let menu = document.getElementsByClassName("genreOptions")
menu[0].style.display = "block"
}
function hideFilterMenu(){
    let menu = document.getElementsByClassName("genreOptions")
    menu[0].style.display = "none"
    }
console.log(filtered)
    return (
        <div className='seriesContainer'>
        <div className='SearchInSearch' >
            <NavBarMain inputSearch = {retrieveInputSearchValue} />
        </div>
            <div className='Search-Menu-container'>
                <div className='SeriesAndFilter'   >
                    <div>
                        <h2>Series</h2>
                    </div>
                    <div className='SelectorGenero' onMouseLeave={hideFilterMenu} >
                        <div className='LabelForFilter'  onMouseOver={showFilterMenu}>
                            <p>Genero</p>
                        </div>
                        <div className='genreOptions'   onMouseLeave={hideFilterMenu} onMouseOver={showFilterMenu}>
                            <button onClick={filterByGenre}> All</button>
                            <button onClick={filterByGenre}> Animation</button>
                            <button onClick={filterByGenre}> Comedy</button>
                            <button onClick={filterByGenre}> Crime</button>
                            <button onClick={filterByGenre}> Drama</button>
                            <button onClick={filterByGenre}> Mystery</button>
                        </div>
                    </div>
                </div>
                <div className='Search-menu'>
                    { filtered.length !== 0 ? filtered :
                  search.map((movie)=>{
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
        </div>
    );
}




export default Series;
