import React from "react"
import { Link } from "react-router-dom"
import play from "../assets/playHoverMovie.png"
import like from "../assets/like.png"
import plus from "../assets/plus.png"
import arrowDown from "../assets/down.png"
export default function MovieCards(props){
    function showMenu(e){
       e.currentTarget.childNodes[1].style.display ="flex"
   }
   function hideMenu(e){
       console.log()
       e.currentTarget.childNodes[1].style.display ="none"
   }
       return(
        <>
           <div className='MovieCardCont'  onMouseEnter={showMenu} onMouseLeave={hideMenu}  >
         
               <div className='movieCardImgCont'>
               <div className="title">
                <p>{props.name}</p>
            </div>
                   <img src={props.img} alt=""  />
               </div>
                   {<HiddenMenu genero = {props.genero} />}
           </div>
      
         </>
       )
   }
   
   
   
   function HiddenMenu(props){
       let generoArray =[];
       if(props.genero!== undefined){
       generoArray = props.genero
       } else{return}
    
       return(
           <div className='HiddenMenu' >
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
               <div className='InfoGeneres'>
                   {generoArray.map((a)=>{
                       return  a.name + " "
                   })}
               </div>
               </div>
              
         
       )
   }