const sendNewMassage = "sendNewMassage";

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case sendNewMassage:
            let newMassage = {
                id: 5, massage: action.newMassageValue
            };
            return {
                ...state,
                massages: [...state.massages, newMassage],
            };
        default:
            return state;
    }
};

export const createActionSandMassage = (newMassageValue) => { return {type: sendNewMassage, newMassageValue } };