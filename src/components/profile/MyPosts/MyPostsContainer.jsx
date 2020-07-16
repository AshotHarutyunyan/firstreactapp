import React from "react";
import {createActionAddPost, createActionWriteNewPost} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";




const MyPostsContainer = (props) => {
    let addPost = () => {
        props.store.dispatch(createActionAddPost());
    }

    let changeNewPostText = (text) => {
        props.store.dispatch(createActionWriteNewPost(text));
    }
    return (
        <MyPosts addNewPost={addPost} changeNewPostText={changeNewPostText} postsData={props.store.getState().profilePage}/>
    )
}
export default MyPostsContainer;