import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
        return (
            <div className={classes.dialogs}>
               <div className={classes.dialogsItem}>
                   <div className={classes.dialog + ' ' + classes.active}>
                       <NavLink to="/dialogs/1">Acoount 1</NavLink>
                   </div>
                   <div className={classes.dialog}>
                       <NavLink to="/dialogs/2">Acoount 2</NavLink>
                   </div>
                   <div className={classes.dialog}>
                       <NavLink to="/dialogs/3">Acoount 3</NavLink>
                   </div>
                   <div className={classes.dialog}>
                       <NavLink to="/dialogs/4">Acoount 4</NavLink>
                   </div>
               </div>
                <div className={classes.massages}>
                    <div className={classes.massage}>
                        massage 1
                    </div>
                    <div className={classes.massage}>
                        massage 2
                    </div>
                </div>
            </div>
        )
    };


export default Dialogs;