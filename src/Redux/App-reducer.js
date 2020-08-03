import { getAuthUserData } from "./Auth-reducer";

const SET_INITIALIZE = 'SET_INITIALIZE';


let initialState = {
    inititilize: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
            return {
                ...state,
                inititilize:true,
            }
        default:
            return state;
    }
}
export default appReducer;

const setInitilize = () => ({type:SET_INITIALIZE});

export const initializing = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(()=>{
        dispatch(setInitilize())
    })
};




