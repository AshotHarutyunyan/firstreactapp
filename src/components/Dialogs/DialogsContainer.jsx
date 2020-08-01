import React from 'react';
import {createActionSandMassage} from "../../Redux/Dialogs-reducer";
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
        sendMassage: (value) => { dispatch(createActionSandMassage(value)) },
    }
};

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps,mapDispatchToProps),
)(Dialogs);

