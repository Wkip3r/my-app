import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import * as React from "react";



const Profile = (props) => {
    return (
                <div>
                    <ProfileInfo profile={props.profile}
                                 isOwner={props.isOwner}
                                 setProfile={props.setProfile}
                                 isEditStatus={props.isEditStatus}
                                 editStatus={props.editStatus}
                                 savePhoto={props.savePhoto}
                                 id={props.id}
                                 status={props.status}
                                 updateStatus={props.updateStatus}/>
                    <MyPostsContainer state={props.state} dispatch={props.dispatch} />
                </div>
    )
}

export default Profile