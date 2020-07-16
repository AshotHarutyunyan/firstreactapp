const AddPost = 'AddPost';
const WriteNewPost = 'WriteNewPost';
export const createActionWriteNewPost = (text) => {
    return {
        type: WriteNewPost,
        text: text,
    }

};
export const createActionAddPost = () => {
    return {
        type: AddPost,
    }
};
let initialState = {
    posts: [
        {id: 1, massage: 'Hi.I\'m first post', likes: 10},
        {id: 2, massage: 'Hi.I\'m second post', likes: 15},
    ],
    newPostValue: 'Write your post!!!',
};
export const profileReducer = (state = initialState,action) => {
    switch (action.type){
        case  WriteNewPost:
            state.newPostValue = action.text;
            return state;
        case AddPost:
            let newPost = {
                id: 3, massage: state.newPostValue, likes: 0
            };
            state.posts.push(newPost);
            state.newPostValue = "";
            return state;
        default:
            return state;
    }

};