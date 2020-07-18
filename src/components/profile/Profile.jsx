import React from "react";
import classes from "./Profile.module.css";
import Profileinfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) =>{
    return <div>
        <Profileinfo />
        <MyPostsContainer />
    </div>
}
export default Profile;