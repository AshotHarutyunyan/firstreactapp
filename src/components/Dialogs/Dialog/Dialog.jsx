import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";;

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink activeClassName={classes.active} to={path}>{props.name}</NavLink>
        </div>
    );
};

export default Dialog;