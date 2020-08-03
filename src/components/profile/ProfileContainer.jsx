import {Component} from "react";
import Profile from "./Profile";
import { getUserProfile , getStatus, setStatus} from "../../Redux/Profile-reducer";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import React from "react";
// import {usersAPI} from "../../api/ApiDatas";
import {compose} from "redux";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId ) {
            userId = 9593;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props} profileInfo={this.props.profileInfo} avatarBollean={this.props.avatarBollean} 
        status={this.props.status} isMe={this.props.isMe} setStatus={this.props.setStatus} />
    }
}

let mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    avatarBollean: state.profilePage.avatarBollean,
    status: state.profilePage.status,
    isMe: state.profilePage.isMe,
});


export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, { getUserProfile, getStatus, setStatus }),
    withRouter,
)(ProfileContainer);
