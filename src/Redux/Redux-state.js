import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./Dialogs-reducer";
import {profileReducer} from "./Profile-reducer";
import {sidebarReducer} from "./Sidebar-reducer";
import {UsersReducer} from "./Users-Reducer";

let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    sideBar:sidebarReducer,
    UsersPage:UsersReducer,
})

let Store = createStore(reducers);

export default Store;