import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import { Route } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";


const App = (props) => {
    return (
        <div className='app'>
            <Header/>
            <Navbar friendsData={props.data.sideBar.friends}/>
            <div className='app-content'>
                <Route path="/Profile" render={ () => <Profile  postsData={props.data.profilePage} dispatch={props.dispatch} /> }/>
                <Route path="/Dialogs" render={ () => <Dialogs  dialogsData={props.data.dialogsPage} dispatch={props.dispatch} /> }/>
                <Route path="/News" render={ () => <News /> }/>
                <Route path="/Music" render={ () => <Music /> }/>
                <Route path="/Settings" render={ () => <Settings /> }/>
            </div>
        </div>
    );
}

export default App;
