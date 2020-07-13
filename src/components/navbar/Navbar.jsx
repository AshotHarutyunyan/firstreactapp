import React from "react";
import classes from "./navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink activeClassName={classes.active} to="/Profile">Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink activeClassName={classes.active} to="/Dialogs">Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink activeClassName={classes.active} to="/News">News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink activeClassName={classes.active} to="/Music">Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink activeClassName={classes.active} to="/Settings">Settings</NavLink>
        </div>
        <Friends friends={props.friendsData}/>
    </nav>
}
export default Navbar;