const Set_Users_Total_Count = "Set_Users_Total_Count";
const Set_SelectedPage = "Set_SelectedPage";
const Set_Users = "Set_Users";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    Users: [],
    UsersTotalCount: 0,
    PageUsersCount: 5,
    SelectedPage:1
};
export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNFOLLOW:
            return {
                ...state,
                Users: state.Users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case FOLLOW:
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
        default:
            return state;
    }
};

export const  SetUsersTotalCountAc = (TotalCount) => ({type: Set_Users_Total_Count, TotalCount: TotalCount});
export const  SetSelectedPageAc = (SelectedPage) =>  ({type: Set_SelectedPage, SelectedPage });
export const setUsersAC = (users) => ({type: Set_Users, users });
export const  FOLLOWAc = (userId) => ({type: FOLLOW, userId});
export const  UNFOLLOWAc = (userId) =>  ({type: UNFOLLOW, userId});
