import { GET_INSIGHT_SUCCESS } from "constants/Constants"
import { GET_INSIGHT_REQUEST } from "constants/Constants"
import { GET_INSIGHT_FAIL } from "constants/Constants"
import axios  from "axios"



export const getListInsights = () => async (dispatch) => {
    try {
        dispatch({ type: GET_INSIGHT_REQUEST})

        const { data } = await axios.get('http://127.0.0.1:8000/servers')

        dispatch({
            type: GET_INSIGHT_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: GET_INSIGHT_FAIL,
            payload: error.response && error.response.data.message
        })
    }
}

export default getListInsights