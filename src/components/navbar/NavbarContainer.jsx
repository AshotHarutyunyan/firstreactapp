import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";

// const NavBarContainer = () => {
//     return <StoreContext.Consumer>
//         {   (store) => {
//                 return <Navbar friendsData={store.getState().sideBar.friends}/>
//             }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        friendsData: state.sideBar.friends
    }
};

const NavBarContainer = connect(mapStateToProps)(Navbar);

export default NavBarContainer;