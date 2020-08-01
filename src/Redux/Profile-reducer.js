import {usersAPI, profileApi} from "../api/ApiDatas";

const AddPost = 'AddPost';
const WriteNewPost = 'WriteNewPost';
const setUserProfileText = 'setUserProfile';
const AvatarBollean = 'AvatarBollean';
const StatusText = 'changeStatus';
const ISME = 'ISME';

let initialState = {
    posts: [
        {id: 1, massage: 'Hi.I\'m first post', likes: 10},
        {id: 2, massage: 'Hi.I\'m second post', likes: 15},
    ],
    newPostValue: 'Write your post!!!',
    avatarBollean: false,
    status: '',
    isMe: true,
    profileInfo: null,
};
export const profileReducer = (state = initialState,action) => {
    switch (action.type){
        case  setUserProfileText:
            return {...state, profileInfo: action.profileInfo};
        case  AvatarBollean:
            return {...state, avatarBollean: action.bollean };
        case  StatusText:
                return {...state, status: action.status };
        case  ISME:
                    return {...state, isMe: action.isMe };        
        case AddPost:
            let newPost = {
                id: 3, massage: action.newPostValue, likes: 0
            };
            return {
                ...state,
                posts: [...state.posts,newPost],
            }
        default:
            return state;
    }
};

export const createActionAddPost = (newPostValue) => { return { type: AddPost, newPostValue } };
const changeAvatarBollean = (bollean) => { return { type: AvatarBollean, bollean } };
const changeStatus = (status) => { return { type: StatusText, status } };
const setUserProfile = (profileInfo) => { return { type: setUserProfileText, profileInfo } };
const chackUser = (isMe) => { return { type: ISME, isMe } };

export const getUserProfile = (userID) => (dispatch) => {
    usersAPI.profile(userID).then(response => {
        dispatch(setUserProfile(response.data));
        if(userID === 9593){dispatch(chackUser(true))}else{dispatch(chackUser(false))}
        if(response.data.photos.large){
            dispatch(changeAvatarBollean(true))
        }else{
            dispatch(changeAvatarBollean(false))
        }
    });
};

export const getStatus = (userID) => (dispatch) => {
    profileApi.getStatus(userID).then(response => {
        dispatch(changeStatus(response.data))
    });
};

export const setStatus = (status) => (dispatch) => {
    profileApi.setStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(changeStatus(status))
        }
    });
};