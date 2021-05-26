import s from "../Dialogs.module.css";


const MessageItem: React.FC<PropsType> = (props) => {
    return (
        <div className={props.message.isUser? s.messagesNotUser : s.message }>
            <img src={props.message.avatarLink} />
            {props.message.message}
        </div>
    )
}

type PropsType = {
    message: {
        isUser: boolean,
        avatarLink: string,
        message: string
    }
}

export default MessageItem