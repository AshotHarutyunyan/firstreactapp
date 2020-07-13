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


const App = (props) => {
    return (
        <div className='app'>
            <Header/>
            <Navbar friendsData={props.data.sideBar.friends}/>
            <div className='app-content'>
                <Route path="/Profile" render={ () => <Profile  postsData={props.data.postsPage.posts} /> }/>
                <Route path="/Dialogs" render={ () => <Dialogs  dialogsData={props.data.dialogsPage.dialogs} massagesData={props.data.dialogsPage.massages} /> }/>
                <Route path="/News" component={News}/>
                <Route path="/Music" component={Music}/>
                <Route path="/Settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
