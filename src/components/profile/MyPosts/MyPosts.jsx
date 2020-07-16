import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {createActionAddPost, createActionWriteNewPost} from "../../../Redux/Profile-reducer";




const MyPosts = (props) => {
    let postsElements = props.postsData.posts.map( post =>  <Post message={post.massage} liks={post.likes}/>  );
    let newPostElement = React.createRef();

    let addPost = () => {
        let action = createActionAddPost();
        props.dispatch(action);
    }
    let changeNewPostText = () => {
        let text = newPostElement.current.value;
        let action = createActionWriteNewPost(text);
        props.dispatch(action);
    }
    return (
        <div className={classes.myposts}>
            My posts
            <div className={classes.newpost}>
                <div>
                    <textarea ref={newPostElement} value={props.postsData.newPostValue} onChange={changeNewPostText}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add Post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;