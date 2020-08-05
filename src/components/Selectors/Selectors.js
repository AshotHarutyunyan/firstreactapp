import { createSelector } from "reselect";

export const getUsersSl = (state) => {
    return state.UsersPage.Users
};
export const getUsers = createSelector(getUsersSl,
    (users) => {
    return users.filter(u => true);
})

export const getUsersTotalCountSl = (state) => {
    return state.UsersPage.UsersTotalCount
};
export const getPageUsersCountSl = (state) => {
    return state.UsersPage.PageUsersCount
};
export const getSelectedPageSl = (state) => {
    return state.UsersPage.SelectedPage
};
export const getonFollowingSl = (state) => {
    return state.UsersPage.onFollowing
};
export const getisFetchingSl = (state) => {
    return state.UsersPage.isFetching
};