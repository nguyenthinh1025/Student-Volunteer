import { http } from "../../utils/reponse";

export const GetListReportTypeAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/ReportType/get-all-Report-Type');
            console.log(result.data.data);
            const action = {
                type: "GET_LIST_REPORTTYPE",
                reportType: result.data.data
            }
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}
export const CreateReportTypeAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/ReportType/insert-report-type-by-id', value);


            const action = GetListReportTypeAction();
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const UpdateReportTypeAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put('/ReportType/update-report-Type-by-id', value);
            const action = GetListReportTypeAction();
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}

export const DeleteReportTypeAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/ReportType/delete-report-type-by-id?achivementId=${value}`);
            const action = GetListReportTypeAction();
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}