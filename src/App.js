import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword , 
  onAuthStateChanged, 
  signOut,
  signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "./firebase/firebaseconfig";
import {loginSuccess, logoutSuccess,UserLoginName} from "./features/loginCheck/loginSlice"

import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes,Link,Navigate } from 'react-router-dom';import './App.css';
import Login from "./pages/Login";
import NavBar from "./Components/NavBar";
import HomeScreen from "./pages/homeScreen";
import Main from "./pages/main";
import { store } from "./app/store";
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const [user,setUser] = useState()
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser.email);
           if(currentUser!== null){
             dispatch(loginSuccess("true"))
              //dispatch(UserLoginName(user.email))
          }
  });
  },);

  return (
    <div className="App">
      <BrowserRouter > 
      <NavBar />
      {user }
      <Routes>
        <Route path='/'  element = {  user !== undefined? (
              <Main />
            ) : (
              <HomeScreen/>
            )}/>
        <Route path='/home' element = {<HomeScreen/>}/>
        <Route path='/login' element = {<Login />} />
        <Route path='/main' element = {<Main/>} />
</Routes>
    </BrowserRouter >
    </div>
  );
}

export default App;
