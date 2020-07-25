import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        friendsData: state.sideBar.friends
    }
};

const NavBarContainer = connect(mapStateToProps)(Navbar);

export default NavBarContainer;