import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./Dialogs-reducer";
import {profileReducer} from "./Profile-reducer";
import {sidebarReducer} from "./Sidebar-reducer";

let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    sideBar:sidebarReducer
})

let Store = createStore(reducers);

export default Store;