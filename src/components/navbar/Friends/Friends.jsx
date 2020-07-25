import React from "react";
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let sidebarFriends = props.friends.map( friend => <Friend name={friend.name} img={friend.img} key={friend.id} /> );
    return <div className={classes.friends}>
        <h3>Friends</h3>
        {sidebarFriends}
    </div>
}
export default Friends;