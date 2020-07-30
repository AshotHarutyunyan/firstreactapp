import classes from "./Users.module.css";
import React, {Component} from 'react';
import user_avatar from '../../assets/images/user_default_avatar.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.UsersTotalCount / props.PageUsersCount);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={classes.Users}>
                {
                    props.users.map(u => <div className={classes.user} key={u.id} >
                        <div >
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : user_avatar} className={classes.userPhoto}/>
                            </NavLink>
                            <div className={classes.btnContain}>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.UNFOLLOW(u.id)
                                    }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.FOLLOW(u.id)
                                    }}>Follow</button>}
                            </div>
                        </div>
                        <div>
                                    <span>
                                        <div>{u.name}</div>
                                        <div>{u.status}</div>
                                    </span>
                            <span>
                                        <div>{"u.location.country"}</div>
                                        <div>{"u.location.city"}</div>
                                    </span>
                        </div>
                    </div>)
                }
            </div>
            <div className={classes.pagination}>
                {pages.map( (p) => {
                    return <span key={p}
                                 className={props.SelectedPage === p ? classes.selectedPage : classes.unselectedPage}
                                 onClick={(e) => { props.onPageChanged(p)  }}>{p}</span>
                })}
            </div>
        </div>
    );
};
export default Users;