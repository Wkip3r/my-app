import s from "../Dialogs.module.css";


const MessageItem = (props) => {
    return (
        <div className={props.message.isUser? s.messagesNotUser : s.message }>
            <img src={props.message.avatarLink} />
            {props.message.message}
        </div>
    )
}

export default MessageItem