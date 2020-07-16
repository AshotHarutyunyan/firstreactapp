const WriteNewMassage = "WriteNewMassage";
const sendNewMassage = "sendNewMassage";
export const createActionWriteNewMassage = (text) => {
    return {
        type: WriteNewMassage,
        text: text,
    }
};
export const createActionSandMassage = () => {
    return {
        type: sendNewMassage,
    }
};
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
        case WriteNewMassage:
            console.log(state)
            state.newMassageValue = action.text;
            return state;

        case sendNewMassage:
            console.log(state)
            let newMassage = {
                id: 5, massage: state.newMassageValue
            };
            state.massages.push(newMassage);
            state.newMassageValue = "";
            return state;
        default:
            return state;
    }
};