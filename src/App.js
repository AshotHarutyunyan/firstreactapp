import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarContainer from "./components/navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import WithUrlDataContainerComponent from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/headerContainer";


const App = (props) => {
    return (
        <div className='app'>
            <HeaderContainer/>
            <NavBarContainer/>
            <div className='app-content'>
                <Route path="/Profile/:userId?" render={ () => <WithUrlDataContainerComponent /> }/>
                <Route path="/Dialogs" render={ () => <DialogsContainer /> }/>
                <Route path="/News" render={ () => <News /> }/>
                <Route path="/Music" render={ () => <Music /> }/>
                <Route path="/Settings" render={ () => <Settings /> }/>
                <Route path="/Users" render={ () => <UsersContainer /> }/>
            </div>
        </div>
    );
}

export default App;
