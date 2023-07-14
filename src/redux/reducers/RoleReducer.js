const stateDefault = {
    arrRole: [],

}


export const RoleReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_ROLE': {
            state.arrRole = action.arrRole;
            return { ...state }
        }

        default: return state;
    }
}