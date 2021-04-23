import React from "react";
import style from "./User.module.css";
import {NavLink} from "react-router-dom";

const UserComponent = (props) => {

    const onToggleFollow = () => {
        props.user.followed ? props.follow(props.user.id) : props.unfollow(props.user.id)
    }

    return (
        <div className={style.user}>
            <div className={style.logo}>
                <NavLink to={"/profile/" + props.user.id}>
                    <img
                        src={props.user.photos.small ? props.user.photos.small : "https://sun9-19.userapi.com/impf/c622523/v622523405/2542/hZW1zW5E7xI.jpg?size=200x200&quality=96&proxy=1&sign=6ecf0621f6394a3222b0338b9d7b053c&c_uniq_tag=qgOpCALziX5s1lQJ37xgr7QMlegQvgSUoXcVZY8x00s&type=album"}/>
                </NavLink>
                <div>
                    <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                            onClick={onToggleFollow}
                            className={style.button}>{props.user.followed ? "Follow" : "Unfollow"}
                    </button>
                </div>
            </div>
            <div className={style.userWrapper}>
                <span className={style.name}>{props.user.name}</span>
                <span className={style.description}>{props.user.status}</span>
                <span className={style.country}>{props.user.country}</span>
                <span className={style.city}>{props.user.city}</span>
            </div>
        </div>
    )
}

export default UserComponent