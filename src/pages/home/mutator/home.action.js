import {newsApiService} from 'pages/home/mutator/home.service'

/**
 * Action types for HomeNews
 */
export const HOME_INITIAL_REQUEST = 'HOME_INITIAL_REQUEST'
export const HOME_NEWS_SUCCESS    = 'HOME_NEWS_SUCCESS'
export const HOME_NEWS_FAILURE    = 'HOME_NEWS_FAILURE'


/**
 * function contains three actions { initial request, success and failure}
 * @param {string} params accept query string as params 
 * @returns {Promise} actions creators
 */
export const HomeNewsAction = ({params}) => {
    return async dispatch => {
        try {
            dispatch({type: HOME_INITIAL_REQUEST })
            const result = await newsApiService({params})
            dispatch({type: HOME_NEWS_SUCCESS, payload: result.data })
        } catch (error) {
            dispatch({type: HOME_NEWS_FAILURE, payload: error})
        }
    }
}