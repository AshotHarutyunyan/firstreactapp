import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Profile from "./components/profile/Profile";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarContainer from "./components/navbar/NavbarContainer";


const App = (props) => {
    return (
        <div className='app'>
            <Header/>
            <NavBarContainer store={props.store}/>
            <div className='app-content'>
                <Route path="/Profile" render={ () => <Profile  store={props.store} /> }/>
                <Route path="/Dialogs" render={ () => <DialogsContainer  store={props.store} /> }/>
                <Route path="/News" render={ () => <News /> }/>
                <Route path="/Music" render={ () => <Music /> }/>
                <Route path="/Settings" render={ () => <Settings /> }/>
            </div>
        </div>
    );
}

export default App;
