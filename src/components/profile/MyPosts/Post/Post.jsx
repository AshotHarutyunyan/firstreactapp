import React from "react";
import classes from "./Post.module.css";
const Post = () =>{
    return (
            <div  className={classes.item}>
                <img src="https://nikolaypeltek.com/wp-content/uploads/2019/09/avatarka.jpg" alt="avaImg"/>
                post 1
                <div>
                    <span>Like</span>
                </div>
            </div>
        )
}
export default Post;