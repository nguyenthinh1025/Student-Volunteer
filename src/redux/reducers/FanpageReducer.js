const stateDefault = {
    arrFanpage: [],

}


export const FanpageReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_FANPAGE': {
            state.arrFanpage = action.arrFanpage;
            return { ...state }
        }

        default: return state;
    }
}