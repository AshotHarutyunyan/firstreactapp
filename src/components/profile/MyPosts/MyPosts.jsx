import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field, reset } from "redux-form";
import { Textarea } from "../../common/form/FormControl";
import { required } from "../../FormValidations/formValidation";


let NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                <Field name="newPostText" id="newPostText" component={Textarea} validate={[required]} type="text" />
                </div>
                <div>
                    <button>Add Post</button>
                </div>
        </form>
    )
}
NewPostForm = reduxForm({
    form: 'newPostForm'
  })(NewPostForm)

const MyPosts = (props) => {
    let postsElements = props.postsData.posts.map(post => <Post message={post.massage} liks={post.likes} key={post.id} />);

    let addPost = (values,dispatch) => {
        props.addNewPost(values.newPostText);
        dispatch(reset("newPostForm"));
    }

    return (
        <div className={classes.myposts}>
            My posts
            <div className={classes.newpost}>
                <NewPostForm onSubmit={addPost} />
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;