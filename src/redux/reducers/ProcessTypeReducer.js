const stateDefault = {
    processType: [],

}


export const ProcessTypeReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_PROCESSTYPE': {
            state.processType = action.processType;
            return { ...state }
        }

        default: return state;
    }
}