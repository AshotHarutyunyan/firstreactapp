import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

export const WithAuthedRedirect = (Component) => {
    class WirhAuthRedirect extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to="/login" />
            return (
                <Component {...this.props} />
            );
        }
    }
    connect(mapStateToPropsForRedirect)(WirhAuthRedirect);
}
