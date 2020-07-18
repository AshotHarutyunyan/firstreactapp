import React from "react";
import {createActionAddPost, createActionWriteNewPost} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




// const MyPostsContainer = () => {
//     return <StoreContext.Consumer>
//         { store => {
//                 let addPost = () => {
//                     store.dispatch(createActionAddPost());
//                 }
//                 let changeNewPostText = (text) => {
//                     store.dispatch(createActionWriteNewPost(text));
//                 }
//                 return (
//                     <MyPosts addNewPost={addPost} changeNewPostText={changeNewPostText} postsData={store.getState().profilePage}/>
//                 )
//             }
//         }
//     </StoreContext.Consumer>
// }
// };
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