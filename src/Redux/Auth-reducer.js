import {authApi} from "../api/ApiDatas";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}
export default authReducer;

const setAuthUserData = (userId, email, login ,isAuth) => ({type: SET_USER_DATA, data: {userId, email, login , isAuth}  });

export const getAuthUserData = () => (dispatch) => {
    return authApi.aboutMe().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login,true));
        }
    });
};
export const login = (email,password,rememberMe) => (dispatch) => {
    authApi.login(email,password,rememberMe).then((response) => {
        if(response.data.resultCode === 0){
            dispatch(getAuthUserData())
        }else{
            let massage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("Login",{_error: massage}))
        }
    })
};

export const logout = () => (dispatch) => {
    authApi.logout().then( (response) => {
            if(response.data.resultCode === 0 ){
                dispatch( setAuthUserData(null,null,null,false) )
            }
    })
};


