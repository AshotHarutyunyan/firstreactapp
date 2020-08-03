import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./Dialogs-reducer";
import {profileReducer} from "./Profile-reducer";
import {sidebarReducer} from "./Sidebar-reducer";
import {UsersReducer} from "./Users-Reducer";
import authReducer from "./Auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./App-reducer";

let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    sideBar:sidebarReducer,
    UsersPage:UsersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

let Store = createStore(reducers,applyMiddleware(thunk));

window.store = Store;

export default Store;