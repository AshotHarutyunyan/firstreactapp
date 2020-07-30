import React, {Component} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    FOLLOW,
    SetPage,
    SETTOTALCOUNT,
    SETUSERS,
    toggleIsFetching,
    toggleIsFollowing,
    UNFOLLOW
} from "../../Redux/Users-Reducer";
import Preloader from "../preloader/preloader";
import {usersAPI} from "../../api/ApiDatas";

class UsersApiContainer extends Component {
    componentDidMount() {
        if(this.props.users.length == 0){
            console.log('send')
            this.props.toggleIsFetching(true);
            usersAPI.getUsers(this.props.SelectedPage,this.props.PageUsersCount).then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.SETUSERS(data.items);
                    this.props.SETTOTALCOUNT(data.totalCount);
                });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.SetPage(pageNumber);
        usersAPI.getUsers(pageNumber,this.props.PageUsersCount).then(data => {
                this.props.toggleIsFetching(false);
                this.props.SETUSERS(data.items);
            });
    }

    follow = (userId) => {
        this.props.toggleIsFollowing(true, userId);
        debugger
        usersAPI.follow(userId).then(response => {
                if (response.data.resultCode == 0) {
                    this.props.FOLLOW(userId);
                }
                this.props.toggleIsFollowing(false, userId);
            });
    }
    unfollow = (userId) => {
        this.props.toggleIsFollowing(true, userId);
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode == 0) {
                this.props.UNFOLLOW(userId);
            }
            this.props.toggleIsFollowing(false, userId);
        });
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users UsersTotalCount={this.props.UsersTotalCount}
                   PageUsersCount={this.props.PageUsersCount}
                   SelectedPage={this.props.SelectedPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   FOLLOW={this.follow}
                   UNFOLLOW={this.unfollow}
                   followingInProgress = {this.props.onFollowing}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.Users,
        UsersTotalCount: state.UsersPage.UsersTotalCount,
        PageUsersCount: state.UsersPage.PageUsersCount,
        SelectedPage: state.UsersPage.SelectedPage,
        onFollowing: state.UsersPage.onFollowing,
        isFetching: state.UsersPage.isFetching
    }
};

const UsersContainer = connect(mapStateToProps,{
    FOLLOW,UNFOLLOW,SETUSERS,SETTOTALCOUNT,SetPage,toggleIsFetching,toggleIsFollowing
})(UsersApiContainer);

export default UsersContainer;