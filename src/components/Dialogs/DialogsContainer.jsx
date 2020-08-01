import React from 'react';
import {createActionSandMassage, createActionWriteNewMassage} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";



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

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps,mapDispatchToProps),
)(Dialogs);

