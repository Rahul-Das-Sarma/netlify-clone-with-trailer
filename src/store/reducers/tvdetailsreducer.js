import * as actionTypes from '../actiontypes/actiontype';


 const InitialState = {
     loading : false
 }

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.TV_DETAILS_LOADING:
            return {
                ...state, 
                loading : true 
            }
        case actionTypes.TV_DETAILS:
            return {
                ...state,
                loading : false ,
                movieInfo: action.payload
            }
        case actionTypes.TV_DETAILS_ERROR:
            return {
                ...state,
                loading : false ,
                error : action.payload
            }
        default:
            return state
    }
}

export default reducer;