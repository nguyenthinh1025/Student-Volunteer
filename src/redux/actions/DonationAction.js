import { http } from "../../utils/reponse";
import { GetListActivityAction } from "./ActivityAction";
import { VNPayAction } from "./VNPayAction";

export const DonationAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Donation/create-Donation-activity', value);
            console.log(result.data.data?.donationId);
            const action = GetListActivityAction()
            dispatch(action)
            console.log(result.data.data?.donationId);
            const action1 = VNPayAction(result.data.data?.donationId)
            dispatch(action1)

        } catch (error) {
            console.log(error);
        }
    }
}


