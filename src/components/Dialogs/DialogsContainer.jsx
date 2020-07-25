import React from 'react';
import {createActionSandMassage, createActionWriteNewMassage} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMassage: () => { dispatch(createActionSandMassage()) },
        writeNewMassage: (text) => { dispatch(createActionWriteNewMassage(text)) }
    }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;