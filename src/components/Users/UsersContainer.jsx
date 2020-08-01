import React, {Component} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import { FOLLOW, GETUSERS, SetPage, SETTOTALCOUNT, toggleIsFetching, UNFOLLOW} from "../../Redux/Users-Reducer";
import Preloader from "../preloader/preloader";

class UsersApiContainer extends Component {
    componentDidMount() {
        if(this.props.users.length == 0){
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
        users: state.UsersPage.Users,
        UsersTotalCount: state.UsersPage.UsersTotalCount,
        PageUsersCount: state.UsersPage.PageUsersCount,
        SelectedPage: state.UsersPage.SelectedPage,
        onFollowing: state.UsersPage.onFollowing,
        isFetching: state.UsersPage.isFetching
    }
};

const UsersContainer = connect(mapStateToProps,{
    FOLLOW,UNFOLLOW,SETTOTALCOUNT,SetPage,toggleIsFetching,GETUSERS
})(UsersApiContainer);

export default UsersContainer;