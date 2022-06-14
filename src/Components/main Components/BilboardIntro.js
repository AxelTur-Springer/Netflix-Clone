import React from 'react';
import { useState,useEffect } from 'react';
import {Link } from 'react-router-dom';
import randomNetflixMovies from '../../randomMovieObj';
import play from "../../assets/playIcon.png"
import info from "../../assets/informacion.png"

export const BilboardMain = () => {

    const [randomOriginalNet,setrandomOriginalNet] = useState([])

    
    useEffect(() => {
   
        testing()
    },[]);


 

function testing(){
    let arrayOfPreviewsCompo =[];
    let x = 0;

    for(let i = 0 ; i<  randomNetflixMovies().length ; i++){
        arrayOfPreviewsCompo.push(
            <PreviewMenu 
            img ={"https://image.tmdb.org/t/p/w1280" + 
            randomNetflixMovies()[i].backdrop_path} 
            title = {randomNetflixMovies()[i].name}
            descripcion = {randomNetflixMovies()[i].overview}/>
        )
    }
    setrandomOriginalNet(arrayOfPreviewsCompo[x])
    setInterval(() => {
        x === 19 ? x = 0 : x+=1
        setrandomOriginalNet(arrayOfPreviewsCompo[x])
    }, 10000);
}

    return (
                <>
                    {randomOriginalNet}          
                </>
    );
}



function PreviewMenu(props){

    return(
        <div className='previewMenu' style={ {backgroundImage: `url(${props.img})`}}>
            <div className='Descripcion'>
                <h2>{props.title}</h2>
                <p>{props.descripcion}</p>
            </div>
                <div className='botones'>
                    <div className='PlayBtn'>
                        <Link to={"/Play"} className = "linkToPlay">
                            <div>
                                <div>
                                    <img src={play} />
                                </div>
                                <div>
                                    <p>Play</p> 
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='Info'>
                        <button>
                            <div>
                                <div>
                                    <img src={info} alt="" />
                                </div>
                                <div>
                                    <p>Informacion</p>
                                </div>
                            </div>
                        </button>
                  
                    </div>
                </div>
        </div>
    )
}

