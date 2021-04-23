import s from "./Friends.module.css"
import Friend from "./Friend/Friend";


const Friends = (props) => {
    return (
        <div className={s.friends}>
            <h2>Friends</h2>
            <div className={s.friendsItem}>
                {props.friendsData.map((friend,index) => <Friend key={index} name={friend.name} />)}
            </div>
        </div>
    )
}

export default Friends