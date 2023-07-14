import { http } from "../../utils/reponse";

export const GetListAchivementAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Achivement/get-all-achivement');
            console.log(result.data.data);
            const action = {
                type: "GET_LIST_ACHIVEMENT",
                arrAchivement: result.data.data
            }
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}


export const CreateAchivementAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Achivement/insert-achivement', value);
            console.log(result.data.data);
            const action = GetListAchivementAction();
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}


export const UpdateAchivementAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put('/Achivement/update-achivement-by-id', value);
            const action = GetListAchivementAction();
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}

export const DeleteAchivementAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/Achivement/delete-achivement-by-id?achivementId=${value}`);
            const action = GetListAchivementAction();
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}