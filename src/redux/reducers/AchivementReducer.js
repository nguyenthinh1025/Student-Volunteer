const stateDefault = {
    arrAchivement: [],

}


export const AchivementReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_ACHIVEMENT': {
            state.arrAchivement = action.arrAchivement;
            return { ...state }
        }

        default: return state;
    }
}