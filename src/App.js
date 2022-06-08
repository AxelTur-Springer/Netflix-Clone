import { initializeApp } from "firebase/app";
import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes,Link,Navigate } from 'react-router-dom';import './App.css';
import Login from "./pages/Login";
import NavBar from "./Components/NavBar";
import HomeScreen from "./pages/homeScreen";
import { store } from "./app/store";
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const [user,setUser] = useState()
  const Store = useSelector((store)=>{return store})
  useEffect(() => {
    setUser(Store.LogedInReducer.userLogIn);
  },);
 

  
  return (
    <div className="App">
      <BrowserRouter > 
      {user}   
      <NavBar />
      <Routes>
        <Route path='/'  element = {  user ==="true"? (
              <Navigate replace to="/home" />
            ) : (
              <Login />
            )}/>
        <Route path='/home' element = {<HomeScreen/>}/>
        <Route path='/login' element = {<Login />} />
      </Routes>
    </BrowserRouter >
    </div>
  );
}

export default App;
