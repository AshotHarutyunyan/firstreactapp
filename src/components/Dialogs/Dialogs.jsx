import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Massage from "./Massage/Massage";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/form/FormControl';
import { required } from '../FormValidations/formValidation';

let NewMassageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="NewMassageText" id="NewMassageText" component={Textarea} validate={[required]} type="text" />
                <button >Send</button>
            </div>
        </form>
    )
};
NewMassageForm = reduxForm({
    form: 'newMassageForm'
})(NewMassageForm)

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.dialogs.map(p => <Dialog name={p.name} id={p.id} key={p.id} />);
    let massagesElements = props.dialogsData.massages.map(m => <Massage key={m.id} massage={m.massage} className={m.id % 2 == 0 ? classes.massageRight : classes.massageLeft} />);
    let sendMassage = (values) => {
        props.sendMassage(values.NewMassageText)
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.massages}>
                {massagesElements}
                <div>
                    <NewMassageForm onSubmit={sendMassage} />
                </div>
            </div>
        </div>
    )
};


export default Dialogs;