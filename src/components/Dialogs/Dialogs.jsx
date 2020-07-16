import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Massage from "./Massage/Massage";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.dialogs.map( p =>  <Dialog name={p.name} id={p.id} />  );
    let massagesElements = props.dialogsData.massages.map( m =>  <Massage massage={m.massage} className={  m.id%2==0 ? classes.massageRight : classes.massageLeft } />   );


    let changeNewMassageText = (event) => {
        let text = event.target.value;
        props.writeNewMassage(text)
    };
    let sendMassage = () => {
        props.sendMassage()
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                { dialogsElements }
            </div>
            <div className={classes.massages}>
                { massagesElements }
                <div>
                    <textarea className={classes.newMassage} value={props.dialogsData.newMassageValue} placeholder="Write your Massage!!!" onChange={changeNewMassageText}></textarea>
                    <button onClick={sendMassage}>Send</button>
                </div>
            </div>
        </div>
    )
};


export default Dialogs;