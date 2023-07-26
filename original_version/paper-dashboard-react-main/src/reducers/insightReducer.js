import {GET_INSIGHT_REQUEST, GET_INSIGHT_SUCCESS, GET_INSIGHT_FAIL} from '../constants/Constants'

export const insightListReducer = (state={ insights: []},action) => {
    switch (action.type) {
        case GET_INSIGHT_REQUEST:
            return { loading:true, success:false,  insights: []}
        case GET_INSIGHT_SUCCESS:
            return { loading:false, success:true,  insights: action.payload}
        case GET_INSIGHT_FAIL:
            return { loading:false, success:false,  error: action.payload}
        default:
            return state;
    }
}