import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./ProfileInfo/Profileinfo";
const Profile = (props) =>{
    return <div>
        <Profileinfo />
        <MyPosts postsData={props.postsData}/>
    </div>
}
export default Profile;