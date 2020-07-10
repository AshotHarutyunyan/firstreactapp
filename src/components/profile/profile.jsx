import React from "react";
import classes from "./profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () =>{
    return <div className={classes.content}>
        <div>
            <img className={classes.contentbigimg} alt="contentbigimg" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
        </div>
        <div>ava + description</div>
        <MyPosts />
    </div>
}
export default Profile;