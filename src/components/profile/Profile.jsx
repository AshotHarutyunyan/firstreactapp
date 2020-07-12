import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./ProfileInfo/Profileinfo";
const Profile = () =>{
    return <div>
        <Profileinfo />
        <MyPosts />
    </div>
}
export default Profile;