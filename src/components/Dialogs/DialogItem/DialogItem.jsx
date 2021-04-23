import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.dialog.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.dialog.name}</NavLink>
        </div>
    )
}

export default DialogItem