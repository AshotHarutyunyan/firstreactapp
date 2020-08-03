import React from "react";
import classes from "./header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return <header className={classes.header}>
        <img alt="headerImg" 
        src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" />
        {props.isAuth 
         ?  <div>{props.login} <button onClick={props.logout}>Log out</button></div>
         : <NavLink to='/login'>Login</NavLink> }
    </header >
}
export default Header;