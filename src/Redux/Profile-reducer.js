const AddPost = 'AddPost';
const WriteNewPost = 'WriteNewPost';
const setUserProfileText = 'setUserProfile';

let initialState = {
    posts: [
        {id: 1, massage: 'Hi.I\'m first post', likes: 10},
        {id: 2, massage: 'Hi.I\'m second post', likes: 15},
    ],
    newPostValue: 'Write your post!!!',
    profileInfo: null,
};
export const profileReducer = (state = initialState,action) => {
    switch (action.type){
        case  WriteNewPost:
            return {...state, newPostValue: action.text};
        case  setUserProfileText:
            return {...state, profileInfo: action.profileInfo};
        case AddPost:
            let newPost = {
                id: 3, massage: state.newPostValue, likes: 0
            };
            return {
                ...state,
                posts: [...state.posts,newPost],
                newPostValue: ""
            }
        default:
            return state;
    }
};

export const createActionWriteNewPost = (text) => { return { type: WriteNewPost, text: text, } };
export const createActionAddPost = () => { return { type: AddPost, } };
export const setUserProfile = (profileInfo) => { return { type: setUserProfileText, profileInfo } };