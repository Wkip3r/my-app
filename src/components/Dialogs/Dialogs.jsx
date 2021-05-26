import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import * as React from "react";
import {Field, reduxForm,reset} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


class Dialogs extends React.Component {

    addMessage = (formData) => {
       this.props.addMessage(formData.newMessageBody)
   }


    render() {
        let dialogsElements = this.props.dialogs.dialogsData.map((dialog,index) => <DialogItem key={index} dialog={dialog}/>)
        let messagesElements = this.props.dialogs.messagesData.map((messageItem,index) => <MessageItem key={index} message={messageItem}/>)

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={this.addMessage} />
            </div>
        )
    }
}

const maxLength50 = maxLengthCreator(50)

const AddMessageFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Element("textarea")} name={"newMessageBody"} placeholder={"Enter your message"} validate={[required,maxLength50]} />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const afterSubmit = (result, dispatch) => dispatch(reset('dialogAddMessageForm'));

const AddMessageFormRedux = reduxForm({
    form:"dialogAddMessageForm" ,
    onSubmitSuccess: afterSubmit
})(AddMessageFrom)

export default Dialogs