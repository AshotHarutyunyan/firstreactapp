import React from 'react';
import {createActionSandMassage, createActionWriteNewMassage} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let changeNewMassageText = (text) => {
        props.store.dispatch(createActionWriteNewMassage(text))
    };
    let sendMassage = () => {
        props.store.dispatch(createActionSandMassage())
    };
    return (
        <Dialogs writeNewMassage={changeNewMassageText} sendMassage={sendMassage} dialogsData={props.store.getState().dialogsPage}/>
    )
};


export default DialogsContainer;