import React from "react";
import {createActionAddPost, createActionWriteNewPost} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
         return {
             postsData: state.profilePage
         }
    };

let mapDispatchToProps = (dispatch) => {
        return{
            addNewPost: () => { dispatch(createActionAddPost()) },
            changeNewPostText: (text) => { dispatch(createActionWriteNewPost(text)) }
        }
    };

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;