const stateDefault = {
    configActivity: localStorage.getItem('donation'),
    // configActivity: true,
    isValidCreate: localStorage.getItem('isValidCreate'),
    isFanpage: localStorage.getItem('isFanpage'),
    // isValidCreate: false,
}


export const ConfigActivityReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_CONFIG': {
            state.configActivity = action.configActivity;
            state.isValidCreate = action.isValidCreate;
            state.isFanpage = action.isFanpage;
            return { ...state }
        }

        default: return state;
    }
}