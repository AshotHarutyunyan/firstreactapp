import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";




const MyPosts = (props) => {
    let postsElements = props.postsData.map( post =>  <Post message={post.massage} liks={post.likes}/>  );
    return (
        <div className={classes.myposts}>
            My posts
            <div className={classes.newpost}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;