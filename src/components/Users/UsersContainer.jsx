import React, {Component} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import { FOLLOW, GETUSERS, SetPage, SETTOTALCOUNT, toggleIsFetching, UNFOLLOW} from "../../Redux/Users-Reducer";
import Preloader from "../common/preloader/preloader";
import { getUsers, getUsersTotalCountSl, getPageUsersCountSl, getSelectedPageSl, getonFollowingSl, getisFetchingSl } from "../Selectors/Selectors";

class UsersApiContainer extends Component {
    componentDidMount() {
        if(this.props.users.length === 0){
            this.props.GETUSERS(this.props.SelectedPage,this.props.PageUsersCount)
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.GETUSERS(pageNumber,this.props.PageUsersCount)
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users UsersTotalCount={this.props.UsersTotalCount}
                   PageUsersCount={this.props.PageUsersCount}
                   SelectedPage={this.props.SelectedPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   FOLLOW={this.props.FOLLOW}
                   UNFOLLOW={this.props.UNFOLLOW}
                   followingInProgress = {this.props.onFollowing}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        UsersTotalCount: getUsersTotalCountSl(state),
        PageUsersCount: getPageUsersCountSl(state),
        SelectedPage: getSelectedPageSl(state),
        onFollowing: getonFollowingSl(state),
        isFetching: getisFetchingSl(state)
    }
};

const UsersContainer = connect(mapStateToProps,{
    FOLLOW,UNFOLLOW,SETTOTALCOUNT,SetPage,toggleIsFetching,GETUSERS
})(UsersApiContainer);

export default UsersContainer;