import React from 'react';
import { useState,useEffect } from 'react';
import randomNetflixMovies from '../../randomMovieObj';
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
            title = {randomNetflixMovies()[i].name}/>
        )
    }
    setrandomOriginalNet(arrayOfPreviewsCompo[x])
    setInterval(() => {
        x === 19 ? x = 0 : x+=1
        setrandomOriginalNet(arrayOfPreviewsCompo[x])
    }, 5000);
}

    return (
                <>
                    {randomOriginalNet}          
                </>
    );
}



function PreviewMenu(props){

  const backGround =  document.getElementsByClassName("previewMenu")[0];
    if(backGround !== undefined){
        backGround.style.backgroundImage = `url(${props.img})`

    }


    return(
        <div className='previewMenu'>
           <h3>{props.title}</h3>
        </div>
    )
}