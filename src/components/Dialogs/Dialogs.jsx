import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import * as React from "react";


const Dialogs = (props) => {
    let dialogsElements = props.dialogs.dialogsData.map((dialog,index) => <DialogItem key={index} dialog={dialog}/>)
    let messagesElements = props.dialogs.messagesData.map((messageItem,index) => <MessageItem key={index} message={messageItem}/>)

    let newPostElement = React.createRef()


    const addMessage = () => {
       props.addMessage()
    }

    const onChangeText = () => {
        let text = newPostElement.current.value
        props.onChangeText(text)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newPostElement}
                          onChange={onChangeText}
                          value={props.dialogs.newMessageText}/>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>

    )
}

export default Dialogs