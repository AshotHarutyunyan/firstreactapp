import React from "react";
import {createActionAddPost} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
         return {
             postsData: state.profilePage
         }
    };

let mapDispatchToProps = (dispatch) => {
        return{
            addNewPost: (value) => { dispatch(createActionAddPost(value)) },
        }
    };

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;