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

let dialogsData = [
    {id:1,name:'Account 1'},
    {id:2,name:'Account 2'},
    {id:3,name:'Account 3'},
    {id:4,name:'Account 4'},
];
let massagesData = [
    {id:1,massage:'massage 1'},
    {id:2,massage:'massage 2'},
    {id:3,massage:'massage 3'},
    {id:4,massage:'massage 4'},
];
let postsData = [
    {id:1,massage:'Hi.I\'m first post',liks:10},
    {id:2,massage:'"Hi.I\'m second post',liks:15},
];

const App = () => {
    return (
        <BrowserRouter>
        <div className='app'>
            <Header/>
            <Navbar/>
            <div className='app-content'>
                <Route path="/Profile" render={ () => <Profile  postsData={postsData} /> }/>
                <Route path="/Dialogs" render={ () => <Dialogs  dialogsData={dialogsData} massagesData={massagesData} /> }/>
                <Route path="/News" component={News}/>
                <Route path="/Music" component={Music}/>
                <Route path="/Settings" component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
