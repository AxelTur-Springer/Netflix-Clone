import React from 'react';
import { useState,useEffect } from 'react';
import randomNetflixMovies from '../../randomMovieObj';
import play from "../../assets/playIcon.png"

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
        console.log(randomNetflixMovies())
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
    const [clicked,setclicked] = useState(false)

  const backGround =  document.getElementsByClassName("previewMenu")[0];
    if(backGround !== undefined){
        backGround.style.backgroundImage = `url(${props.img})`

    }
function playVideo(){
    setclicked(true)
}

console.log(props)
    return(
        <div className='previewMenu'>
            {clicked ? <YoutubeEmbed /> : null }
            <div className='Descripcion'>
                <h2>{props.title}</h2>
                <p>{props.descripcion}</p>
            </div>
                <div className='botones'>
                    <div className='PlayBtn'>
                        <button onClick={playVideo}>
                            <img src={play} />Play
                        </button>
                    </div>
                    <div >
                        <button>Mas informacionS</button>
                    </div>
                </div>
        </div>
    )
}

const YoutubeEmbed = () => (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/mCdA4bJAGGk`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );