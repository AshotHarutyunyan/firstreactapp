import {usersAPI} from "../api/ApiDatas";

const Set_Users_Total_Count = "Set_Users_Total_Count";
const Set_SelectedPage = "Set_SelectedPage";
const Set_Users = "Set_Users";
const FOLLOWTEXT = "FOLLOW";
const UNFOLLOWTEXT = "UNFOLLOW";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const toggleFollowing = 'toggleFollowing';

let initialState = {
    Users: [],
    UsersTotalCount: 0,
    PageUsersCount: 5,
    SelectedPage:1,
    isFetching: true,
    onFollowing: []
};

export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNFOLLOWTEXT:
            return {
                ...state,
                Users: state.Users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case FOLLOWTEXT:
            return {
                ...state,
                Users: state.Users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;

                })
            }
        case Set_Users_Total_Count:
            return {...state, UsersTotalCount: action.TotalCount};
        case Set_SelectedPage:
            return {...state, SelectedPage: action.SelectedPage};
        case Set_Users:
            return {...state, Users: action.users};
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        case toggleFollowing:
            return { ...state,
                  onFollowing : action.toggleinFollowing
                    ? [...state.onFollowing,action.id]
                    : state.onFollowing.filter(id => id != action.id )
            }
        default:
            return state;
    }
};

export const  SETTOTALCOUNT = (TotalCount) => ({type: Set_Users_Total_Count, TotalCount: TotalCount});
export const  SetPage = (SelectedPage) =>  ({type: Set_SelectedPage, SelectedPage });
const SETUSERS = (users) => ({type: Set_Users, users });
const  FOLLOWAC = (userId) => ({type: FOLLOWTEXT, userId});
const  UNFOLLOWAC = (userId) =>  ({type: UNFOLLOWTEXT, userId});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });
const toggleIsFollowing = (toggleinFollowing, id) => ({type: toggleFollowing, toggleinFollowing, id });


export const GETUSERS = (SelectedPage,PageUsersCount) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(SetPage(SelectedPage));
    usersAPI.getUsers(SelectedPage,PageUsersCount).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(SETUSERS(data.items));
        dispatch(SETTOTALCOUNT(data.totalCount));
    });
};

export const FOLLOW = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    usersAPI.follow(userId).then(response => {
        if (response.data.resultCode == 0) {
            dispatch(FOLLOWAC(userId));
        }
        dispatch(toggleIsFollowing(false, userId));
    });
};
export const UNFOLLOW = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    usersAPI.unfollow(userId).then(response => {
        if (response.data.resultCode == 0) {
            dispatch(UNFOLLOWAC(userId));
        }
        dispatch(toggleIsFollowing(false, userId));
    });
};

