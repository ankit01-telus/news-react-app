import { 
    HOME_INITIAL_REQUEST, 
    HOME_NEWS_SUCCESS, 
    HOME_NEWS_FAILURE 
} from './home.action'

let initialState = {
    isFetching: false,
    error: ""
}
/**
 * Reducer function to update store according to action type.
 * @param {Object} state state
 * @param {object} action contains actions along with type and payload
 * @returns {object} state
 */

const HomeReducer = (state=initialState, action) => {
    switch (action.type) {
        case HOME_INITIAL_REQUEST :
            state.isFetching = true
            return {
                ...state
            }
        
        case HOME_NEWS_SUCCESS : 
            state.isFetching = false
            state.error = ""
            return {
                ...state,
                data: action.payload
            }

        case HOME_NEWS_FAILURE : 
            state.isFetching = false
            state.error = action.payload
            return {
                ...state
            }
    
        default:
            return state
    }
}
export default HomeReducer