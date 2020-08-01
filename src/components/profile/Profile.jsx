import React from "react";
import classes from "./Profile.module.css";
import Profileinfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) =>{
    return <div>
        <Profileinfo profile={props.profileInfo} avatarBollean={props.avatarBollean} status={props.status} isMe={props.isMe} setStatus={props.setStatus}/>
        <MyPostsContainer />
    </div>
}
export default Profile;