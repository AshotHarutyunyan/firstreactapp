import classes from "./Users.module.css";
import React, {Component} from 'react';
import * as axios from "axios";
import user_avatar from '../../assets/images/user_default_avatar.png'
class Users extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.SelectedPage}&count=${this.props.PageUsersCount}`)
            .then(response => {
                this.props.SETUSERS(response.data.items);
                this.props.SETTOTALCOUNT(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.SetPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.PageUsersCount}`)
            .then(response => {
                this.props.SETUSERS(response.data.items);
                console.log(response)
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.UsersTotalCount / this.props.PageUsersCount);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div className={classes.Users}>
                    {
                        this.props.users.map(u => <div className={classes.user} key={u.id} >
                                <div >
                                    <div>
                                        <img src={u.photos.small != null ? u.photos.small : user_avatar} className={classes.userPhoto}/>
                                    </div>
                                    <div className={classes.btnContain}>
                                        {u.followed
                                            ? <button onClick={() => {
                                                this.props.UNFOLLOW(u.id)
                                            }}>Unfollow</button>
                                            : <button onClick={() => {
                                                this.props.FOLLOW(u.id)
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
                                     className={this.props.SelectedPage === p ? classes.selectedPage : classes.unselectedPage}
                                     onClick={(e) => { this.onPageChanged(p)  }}>{p}</span>
                    })}
                </div>
            </div>
        );
    }
}

export default Users;