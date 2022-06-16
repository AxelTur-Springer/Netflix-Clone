import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import NavBarMain from '../Components/main Components/navbarMain'; 
import { originalSeriesapi,popularApi ,allMovies ,genresList} from '../MovieApiData';
import MovieCards from '../Components/MovieCard';
import "../styling/search.css"
const Search = () => {
       
    const [popular,setpopular] = useState([])
    const [originalSeries,setoriginalSeries] = useState([])
    const [all,setAll] = useState([])
    const [search,setSearch] = useState([])
    const [genres,setGeneres] = useState({genres:[]})
    const [num,setNum] = useState(1)

    const navigate = useNavigate()


    useEffect(() => {
        genresList().then((data)=>{setGeneres(data) })
        async function bringAll(){
            const Pop = await popularApi()
            const resultPop = Pop.results
            const originalNet = await originalSeriesapi()
            const resultOriginal = originalNet.results
            setAll(resultPop.concat(resultOriginal)) 
            setSearch(resultPop.concat(resultOriginal))
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
        <NavBarMain inputSearch = {retrieveInputSearchValue} />
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
                        />
                        })
                    }    
                    </div>
                </div>
        </>
    );
}




export default Search;
