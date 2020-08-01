import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./Dialogs-reducer";
import {profileReducer} from "./Profile-reducer";
import {sidebarReducer} from "./Sidebar-reducer";
import {UsersReducer} from "./Users-Reducer";
import authReducer from "./Auth-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    sideBar:sidebarReducer,
    UsersPage:UsersReducer,
    auth: authReducer
})

let Store = createStore(reducers,applyMiddleware(thunk));

window.state = Store.getState();

export default Store;