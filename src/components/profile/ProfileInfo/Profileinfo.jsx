import React from "react";
import classes from "./Profileinfo.module.css";
import Preloader from "../../preloader/preloader";

const Profileinfo = (props) =>{
    if (!props.profile) {
        return <Preloader />
    }
    return <div className={classes.profileInfo}>
        <div>
            <img className={classes.contentbigimg} alt="contentbigimg" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
        </div>
        <div>
            <img src={props.profile ? props.profile.photos.large : 'https://nikolaypeltek.com/wp-content/uploads/2019/09/avatarka.jpg'} />
        </div>
        <div>ava + description</div>
    </div>
}
export default Profileinfo;