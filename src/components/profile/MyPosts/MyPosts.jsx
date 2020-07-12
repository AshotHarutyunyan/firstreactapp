import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
    {id:1,massage:'Hi.I\'m first post',liks:10},
    {id:2,massage:'"Hi.I\'m second post',liks:15},
];
let postsElements = postsData.map( post =>  <Post message={post.massage} liks={post.liks}/>  );

const MyPosts = () => {
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