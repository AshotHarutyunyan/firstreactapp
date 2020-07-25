import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import { FOLLOWAc, SetSelectedPageAc, setUsersAC, SetUsersTotalCountAc, UNFOLLOWAc} from "../../Redux/Users-Reducer";


let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.Users,
        UsersTotalCount: state.UsersPage.UsersTotalCount,
        PageUsersCount: state.UsersPage.PageUsersCount,
        SelectedPage: state.UsersPage.SelectedPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        FOLLOW: (userId) => { dispatch(FOLLOWAc(userId)); },
        UNFOLLOW: (userId) => { dispatch(UNFOLLOWAc(userId)); },
        SETUSERS: (users) => { dispatch(setUsersAC(users)) },
        SETTOTALCOUNT: (count) => { dispatch(SetUsersTotalCountAc(count)) },
        SetPage: (count) => { dispatch(SetSelectedPageAc(count)) },
    }
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;