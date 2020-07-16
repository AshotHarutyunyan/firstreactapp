import React from "react";
import Navbar from "./Navbar";

const NavBarContainer = (props) => {
    return <Navbar friendsData={props.store.getState().sideBar.friends}/>
}
export default NavBarContainer;