import React from 'react';
import Header from "./header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/Auth-reducer";
import {usersAPI} from "../../api/ApiDatas";

class HeaderContainer extends React.Component {
    componentDidMount() {
        if(this.props.login == null){
            usersAPI.aboutMe().then(data => {
                    if (data.resultCode === 0) {
                        let {id, login, email} = data.data;
                        this.props.setAuthUserData(id, email, login);
                    }
                });
        }
    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);