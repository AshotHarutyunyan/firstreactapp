import React from "react";
import classes from "./Profileinfo.module.css";
const Profileinfo = () =>{
    return <div className={classes.profileInfo}>
        <div>
            <img className={classes.contentbigimg} alt="contentbigimg" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
        </div>
        <div>ava + description</div>
    </div>
}
export default Profileinfo;