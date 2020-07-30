import {Component} from "react";
import Profile from "./Profile";
import {setUserProfile} from "../../Redux/Profile-reducer";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import React from "react";
import {usersAPI} from "../../api/ApiDatas";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId > 0 ) {
            usersAPI.profile(userId).then(response => {
                    this.props.setUserProfile(response.data);
                });
        }
    }

    render() {
        return <Profile {...this.props} profileInfo={this.props.profileInfo} />
    }
}

let mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);