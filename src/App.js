import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Music from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
        <div className='app'>
            <Header/>
            <Navbar/>
            <div className='app-content'>
                <Route path="/Profile" component={Profile}/>
                <Route path="/Dialogs" component={Dialogs}/>
                <Route path="/News" component={News}/>
                <Route path="/Music" component={Music}/>
                <Route path="/Settings" component={Settings}/>
            </div>

        </div>
        </BrowserRouter>
    );
}

export default App;
