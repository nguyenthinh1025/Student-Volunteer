import { http } from "../../utils/reponse";

export const VNPayAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/VNPay?donateID=${id}`);
            console.log(result.data);

            window.location.href = result.data;
        } catch (error) {
            console.log(error);
        }
    }
}