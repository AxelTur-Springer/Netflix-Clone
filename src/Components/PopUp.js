import React from 'react';
import "../styling/popup.css"
import { useEffect } from 'react';
import { useState,setState } from 'react';

const PopUp = (props) => {

let greeting;
if(props.exists){
    greeting = "Looks like you already have an account, redirecting to login"
}else{
    greeting = "Looks like you dont have an account, redirecting to register"
}


const [seconds, setSeconds ] =  useState(5);
useEffect(()=>{
let myInterval = setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        if (seconds === 0) {
                setSeconds(5);
        } 
    }, 1000)
    return ()=> {
        clearInterval(myInterval);
      };
});

    return (
        <div className='popUpCont'>
            <div className='popUp'>
                <div>
                    <h2>Welcome</h2>
                    <p>{greeting}</p>
                </div>
                <div className='Timer'>
                    <h1>{seconds}</h1>
                </div>
            </div>
        </div>
    );
}

export default PopUp;
