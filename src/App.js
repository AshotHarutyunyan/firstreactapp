import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarContainer from "./components/navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import WithUrlDataProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/Login/Login";


const App = (props) => {
    return (
        <div className='app'>
            <HeaderContainer/>
            <NavBarContainer/>
            <div className='app-content'>
                <Route path="/Profile/:userId?" render={ () => < WithUrlDataProfileContainer /> }/>
                <Route path="/Dialogs" render={ () => < DialogsContainer /> }/>
                <Route path="/News" render={ () => < News /> }/>
                <Route path="/Music" render={ () => < Music /> }/>
                <Route path="/Settings" render={ () => < Settings /> }/>
                <Route path="/Users" render={ () => < UsersContainer /> }/>
                <Route path="/login" render={ () => < Login onSubmit={(values) => {console.log(values)}} /> }/>
            </div>
        </div>
    );
}

export default App;
