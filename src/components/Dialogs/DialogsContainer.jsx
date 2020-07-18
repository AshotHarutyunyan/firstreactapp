import React from 'react';
import {createActionSandMassage, createActionWriteNewMassage} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//         { store => {
//             let changeNewMassageText = (text) => {
//                 store.dispatch(createActionWriteNewMassage(text))
//             };
//             let sendMassage = () => {
//                store.dispatch(createActionSandMassage())
//             };
//             return (
//                 <Dialogs writeNewMassage={ changeNewMassageText } sendMassage={sendMassage} dialogsData={ store.getState().dialogsPage }/>
//             )
//         }
//
//         }
//     </StoreContext.Consumer>
// };

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