import {dialogsReducer} from "./Dialogs-reducer";
import {profileReducer} from "./Profile-reducer";
import {sidebarReducer} from "./Sidebar-reducer";

const AddPost = 'AddPost';
const WriteNewPost = 'WriteNewPost';
const WriteNewMassage = "WriteNewMassage";
const sendNewMassage = "sendNewMassage";

let Store = {
    _State: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Account 1'},
                {id: 2, name: 'Account 2'},
                {id: 3, name: 'Account 3'},
                {id: 4, name: 'Account 4'},
            ],
            massages: [
                {id: 1, massage: 'massage 1'},
                {id: 2, massage: 'massage 2'},
                {id: 3, massage: 'massage 3'},
                {id: 4, massage: 'massage 4'},
            ],
            newMassageValue: '',
        },
        profilePage: {
            posts: [
                {id: 1, massage: 'Hi.I\'m first post', likes: 10},
                {id: 2, massage: 'Hi.I\'m second post', likes: 15},
            ],
            newPostValue: 'Write your post!!!',
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Account 1', img: 'https://nikolaypeltek.com/wp-content/uploads/2019/09/avatarka.jpg'},
                {id: 2, name: 'Account 2', img: 'https://nikolaypeltek.com/wp-content/uploads/2019/09/avatarka.jpg'},
                {id: 3, name: 'Account 3', img: 'https://nikolaypeltek.com/wp-content/uploads/2019/09/avatarka.jpg'},
            ],
        },
    },
    getState() {
        return this._State;
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { // { type : " " }
        this._State.dialogsPage = dialogsReducer(this._State.dialogsPage,action);
        this._State.profilePage = profileReducer(this._State.profilePage,action);
        this._State.sideBar = sidebarReducer(this._State.sideBar,action);
        this._callSubscriber();
        console.log(this._State)
    },
};

export default Store;


