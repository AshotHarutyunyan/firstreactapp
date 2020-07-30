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
                  onFollowing : action.toggleFollowing
                    ? [...state.onFollowing,action.id]
                    : state.onFollowing.filter(id => id != action.id )
            }
        default:
            return state;
    }
};

export const  SETTOTALCOUNT = (TotalCount) => ({type: Set_Users_Total_Count, TotalCount: TotalCount});
export const  SetPage = (SelectedPage) =>  ({type: Set_SelectedPage, SelectedPage });
export const SETUSERS = (users) => ({type: Set_Users, users });
export const  FOLLOW = (userId) => ({type: FOLLOWTEXT, userId});
export const  UNFOLLOW = (userId) =>  ({type: UNFOLLOWTEXT, userId});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowing = (toggleFollowing, id) => ({type: TOGGLE_IS_FETCHING, toggleFollowing, id })

