import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Post from "../profile/MyPosts/Post/Post";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink activeClassName={classes.active} to={path}>{props.name}</NavLink>
        </div>
    );
};

const Massage = (props) => {
    return (
        <div className={classes.massage}>
            {props.massage}
        </div>
    );
};
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

let dialogsElements = dialogsData.map( p =>  <Dialog name={p.name} id={p.id} />  );
let massagesElements = massagesData.map( m =>  <Massage massage={m.massage} />  );

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                { dialogsElements }
            </div>
            <div className={classes.massages}>
                { massagesElements }
            </div>
        </div>
    )
};


export default Dialogs;