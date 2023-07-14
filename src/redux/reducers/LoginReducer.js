const stateDefault = {
    userLogin: {},
    userID: localStorage.getItem('userID'),
    msg: '',
}


export const LoginReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_USER_LOGIN': {
            state.userLogin = action.userLogin;
            state.userID = action.userID;
            return { ...state }
        }
        case 'CHECH_LOGIN': {
            state.msg = action.data;
            return { ...state }
        }

        default: return state;
    }
}