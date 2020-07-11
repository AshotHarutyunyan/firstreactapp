import React from "react";
import classes from "./Post.module.css";
const Post = (props) =>{
    return (
            <div  className={classes.item}>
                <img src="https://nikolaypeltek.com/wp-content/uploads/2019/09/avatarka.jpg" alt="avaImg"/>
                {props.message}
                <div>
                    <span>{props.liks}</span>
                </div>
            </div>
        )
}
export default Post;