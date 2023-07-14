import { http } from "../../utils/reponse";

export const GetListFanpageAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Fanpage/getall-fanpage');
            console.log(result.data.data);
            const action = {
                type: "GET_LIST_FANPAGE",
                arrFanpage: result.data.data
            }
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}