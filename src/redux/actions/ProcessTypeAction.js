import { http } from "../../utils/reponse";

export const GetListProcessTypeAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/ProcessType/get-all-process-Type');
            console.log(result.data.data);
            const action = {
                type: "GET_LIST_PROCESSTYPE",
                processType: result.data.data
            }
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}
export const CreateProcessTypeAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/ProcessType/insert-report-type-by-id', value);


            const action = GetListProcessTypeAction();
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const UpdateProcessTypeAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put('/ProcessType/update-process-type-by-id', value);
            const action = GetListProcessTypeAction();
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}

export const DeleteProcessTypeAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/ProcessType/delete-process-type-by-id?processTypeId=${value}`);
            const action = GetListProcessTypeAction();
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}