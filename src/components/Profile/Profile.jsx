import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import * as React from "react";



const Profile = (props) => {
    return (
                <div>
                    <ProfileInfo profile={props.profile}
                                 isEditStatus={props.isEditStatus}
                                 editStatus={props.editStatus}
                                 status={props.status}
                                 updateStatus={props.updateStatus}/>
                    <MyPostsContainer state={props.state} dispatch={props.dispatch} />
                </div>
    )
}

export default Profile