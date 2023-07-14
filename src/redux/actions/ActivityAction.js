import { http } from "../../utils/reponse";
import { VNPayAction } from "./VNPayAction";

export const GetListActivityAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Activity/get-activity?pageSize=5&PageLoad=1');
            console.log(result.data.data);
            const action = {
                type: "GET_LIST_ACTIVITY",
                arrActivity: result.data.data
            }
            dispatch(action)

            localStorage.setItem('activity', JSON.stringify(result.data.data))
        } catch (error) {
            console.log(error);
        }
    }
}

export const CreateActivityAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Activity/Insert-Activity', value);
            console.log(result.data.data);
            const action = GetListActivityAction()
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}