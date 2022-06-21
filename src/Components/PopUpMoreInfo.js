import React from 'react';
import play from "../assets/playHoverMovie.png"
import like from "../assets/like.png"
import plus from "../assets/plus.png"
import arrowDown from "../assets/down.png"
import close from "../assets/close.png"
import "../styling/popupmoreinfo.css"
import { useEffect } from 'react';
import { useState,setState } from 'react';
import { Link } from 'react-router-dom';

const PopUpInfo = (props) => {


useEffect(()=>{

});

    return (
        <div className='popUpContMoreInfo' >
            <div className='popUpMoreInfo'>
                <div className='ImgBackground' style={ {backgroundImage: `url(${props.img})`}} >
                    <div className='btnClose'>
                        <button onClick={props.showOrHide}>
                            <img src={close} alt="" srcset="" />
                        </button>
                    </div>  
                    <div>
                        <h1>{props.title}</h1>
                    </div>
                    <div>
                    <div className='ContainerButtons'>
                           <div className='playAddColection'>
                               <div>
                               <Link to ="/play" >
                                   <button>
                                       <div className='playImgCont'>
                                           <img src={play} alt="" />
                                       </div>
                                   </button>
                               </Link>
                               </div>
                               <div>
                                   <button>
                                       <div>
                                           <img src={like} alt="" />
                                       </div>
                                   </button>
                               </div>
                               <div>
                                   <button>
                                       <div>
                                           <img src={plus} alt="" />
                                       </div>
                                   </button>
                               </div>
                           </div>
                           <div className='SeeMore'>
                               <div>
                                   <button>
                                       <div>
                                           <img src={arrowDown} alt="" />
                                       </div>
                                   </button>
                               </div>
                           </div>    
                   </div>
                    </div>
                </div>
                <div className='DescripcionAndSuch'>
                    <div>
                        <p>
                            {props.descripcion}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUpInfo;
