import s from "./Friends.module.css"
import {FriendType, NavbarReducerType} from "../../../redux/navbarReducer";
import React from "react";
import Friend from "./Friend/Friend";


const Friends: React.FC<PropsType> = (props) => {
    return (
        <div className={s.friends}>
            <h2>Friends</h2>
            <div className={s.friendsItem}>
                {props.friendsData.map((friend,index) => <Friend key={index} name={friend.name} />)}
            </div>
        </div>
    )
}

type PropsType = {
    friendsData: Array<FriendType>
}


export default Friends