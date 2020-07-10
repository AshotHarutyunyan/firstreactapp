import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/profile";
const  App = () => {
  return (
        <div className='app'>
            <Header />
            <Navbar/>
            <Profile/>
        </div>
  );
}





export default App;
