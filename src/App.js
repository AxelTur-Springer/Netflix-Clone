import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase/firebaseconfig";
import {
  loginSuccess,
  logoutSuccess,
  UserLoginName,
} from "./features/loginCheck/loginSlice";

import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import HomeScreen from "./pages/homeScreen";
import Main from "./pages/main";
import Register from "./pages/register";
import Search from "./pages/search";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Footer from "./Components/footer";
import { YoutubeEmbed } from "./pages/Reproduce";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [user, setUser] = useState(undefined);
  const dispatch = useDispatch();
  const Store = useSelector((store) => {
    return store;
  });
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        setUser(currentUser.email);

        dispatch(loginSuccess("true"));
        //dispatch(UserLoginName(user.email))
      } else {
        setUser(undefined);
      }
    });
  }, [Store]);
  console.log("Thank you very much for visiting my proyect :)");
  /*initial={{ }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}*/
  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                {user !== undefined ? (
                  <Navigate replace to="/main" />
                ) : (
                  <HomeScreen />
                )}
              </motion.div>
            }
          />
          <Route
            path="/home"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                {user !== undefined ? (
                  <Navigate replace to="/main" />
                ) : (
                  <HomeScreen />
                )}
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                {user !== undefined ? (
                  <Navigate replace to="/main" />
                ) : (
                  <Login />
                )}
              </motion.div>
            }
          />
          <Route
            path="/main"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                {user === undefined ? (
                  <Navigate replace to="/home" />
                ) : (
                  <Main />
                )}
              </motion.div>
            }
          />
          <Route
            path="/register"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                {user !== undefined ? (
                  <Navigate replace to="/main" />
                ) : (
                  <Register />
                )}
              </motion.div>
            }
          />
          <Route
            path="/play"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                {user === undefined ? (
                  <Navigate replace to="/home" />
                ) : (
                  <YoutubeEmbed />
                )}
              </motion.div>
            }
          />
          <Route
            path="/search"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                {user === undefined ? (
                  <Navigate replace to="/home" />
                ) : (
                  <Search />
                )}
              </motion.div>
            }
          />
          <Route
            path="/Series"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                {user === undefined ? (
                  <Navigate replace to="/home" />
                ) : (
                  <Series />
                )}
              </motion.div>
            }
          />
          <Route
            path="/Movies"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                {user === undefined ? (
                  <Navigate replace to="/home" />
                ) : (
                  <Movies />
                )}
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
