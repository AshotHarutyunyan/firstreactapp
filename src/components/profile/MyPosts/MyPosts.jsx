import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";




const MyPosts = (props) => {
    let postsElements = props.postsData.posts.map( post =>  <Post message={post.massage} liks={post.likes} key={post.id}/>  );
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addNewPost();
    }
    let changeNewPostText = () => {
        let text = newPostElement.current.value;
        props.changeNewPostText(text);
    }
    return (
        <div className={classes.myposts}>
            My posts
            <div className={classes.newpost}>
                <div>
                    <textarea ref={newPostElement} value={props.postsData.newPostValue}  onChange={changeNewPostText}></textarea>
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