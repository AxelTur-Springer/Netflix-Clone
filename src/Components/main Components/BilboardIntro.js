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

    for(let i = 0 ; i< randomNetflixMovies().length ; i++){
        arrayOfPreviewsCompo.push(
            <PreviewMenu 
            img ={"https://image.tmdb.org/t/p/w1280" + 
            randomNetflixMovies()[i].backdrop_path} />
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
    return(
        <div className='previewMenu'>
            <img src={props.img} alt="" />
        </div>
    )
}