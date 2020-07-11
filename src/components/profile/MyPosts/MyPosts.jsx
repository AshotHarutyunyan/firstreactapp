import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () =>{
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>
                <Post message="Hi.I'm first post"  liks='10' />
                <Post message="Hi.I'm second post" liks='15' />
            </div>
        </div>
        )
}
export default MyPosts;