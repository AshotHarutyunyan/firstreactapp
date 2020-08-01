import React from "react";
import classes from "./Profileinfo.module.css";
import Status from "./Status";
// import Preloader from "../../preloader/preloader";

const Profileinfo = (props) =>{
    // if (!props.profile) {
    //     return <Preloader />
    // }
    return <div className={classes.profileInfo}>
        {/* <div>
            <img className={classes.contentbigimg} alt="contentbigimg" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
        </div> */}
        <div className={classes.avatarImg}>
            <img src={props.avatarBollean ? props.profile.photos.large : 'https://nikolaypeltek.com/wp-content/uploads/2019/09/avatarka.jpg'}  alt=''/>
        </div>
        <Status status={props.status} isMe={props.isMe} setStatus={props.setStatus} />
        <div>ava + description</div>
    </div>
}
export default Profileinfo;