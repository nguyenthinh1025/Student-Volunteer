const stateDefault = {
    reportType: [],

}


export const ReportType = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_REPORTTYPE': {
            state.reportType = action.reportType;
            return { ...state }
        }

        default: return state;
    }
}