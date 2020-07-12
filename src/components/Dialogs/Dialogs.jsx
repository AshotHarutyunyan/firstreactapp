import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Massage from "./Massage/Massage";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map( p =>  <Dialog name={p.name} id={p.id} />  );
    let massagesElements = props.massagesData.map( m =>  <Massage massage={m.massage} />  );

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