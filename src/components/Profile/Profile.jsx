import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Redirect} from "react-router";
import * as React from "react";



const Profile = (props) => {
    return (
                <div>
                    <ProfileInfo profile={props.profile}/>
                    <MyPostsContainer state={props.state} dispatch={props.dispatch} />
                </div>
    )
}

export default Profile