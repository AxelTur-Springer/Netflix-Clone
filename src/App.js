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
import { BrowserRouter, Route, Routes,Link,Navigate,useNavigate } from 'react-router-dom';import './App.css';
import Login from "./pages/Login";
import NavBar from "./Components/NavBar";
import HomeScreen from "./pages/homeScreen";
import Main from "./pages/main";
import Register from "./pages/register";
import Search from "./pages/search";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Footer from "./Components/footer";
import { YoutubeEmbed } from "./pages/Reproduce";
import { store } from "./app/store";
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const [user,setUser] = useState(undefined)
  const dispatch = useDispatch();
  const Store = useSelector((store)=>{return store})
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
           if(currentUser!== null){
            setUser(currentUser.email);

             dispatch(loginSuccess("true"))
              //dispatch(UserLoginName(user.email))
            }
            else{
              setUser(undefined)
            }
  });
  },[Store]);
  console.log("Thank you very much for visiting my proyect :)")
  return (
    <div className="App">
      <BrowserRouter > 
      <Routes>
        <Route path='/'  element = { 
            user !== undefined? (
            <Navigate replace to="/main" />
            ) : (
              <HomeScreen/>
            )}/>
        <Route path='/home' element = { 
          user !== undefined? (
            <Navigate replace to="/main" />
          ) : (
            <HomeScreen />
          ) }/>
        <Route path='/login' element={
          user !== undefined? (
            <Navigate replace to="/main" />
          ) : (
            <Login />
          )} />
        <Route path='/main' element = {
          user === undefined? (
            <Navigate replace to="/home" />
          ) : (
            <Main />
          )} />
            <Route path='/register' element = {
            user !== undefined? (
            <Navigate replace to="/main" />
          ) : (
            <Register />
          )}/>
           <Route path='/play' element = {
          user === undefined? (
            <Navigate replace to="/home" />
          ) : (
            <YoutubeEmbed />
          )} />
           <Route path='/search' element = {
          user === undefined? (
            <Navigate replace to="/home" />
          ) : (
            <Search />
          )} />
            <Route path='/Series' element = {
          user === undefined? (
            <Navigate replace to="/home" />
          ) : (
            <Series />
          )} />
                 <Route path='/Movies' element = {
          user === undefined? (
            <Navigate replace to="/home" />
          ) : (
            <Movies />
          )} />
</Routes>
    </BrowserRouter >
    <div className="Footer">
    <Footer/>

    </div>
    </div>
  );
}

export default App;