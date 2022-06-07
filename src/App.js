import { initializeApp } from "firebase/app";
import React from 'react';
import './App.css';
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Awesome App</h1>
          <Login />
      </header>
    </div>
  );
}

export default App;
