import axios from 'axios'

/**
 * News api service to fetch news data
 * @param {string} params accept params for query string to news api  
 * @returns {Promise} axios
 */
export const newsApiService = ({params}) => {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: process.env.REACT_APP_BASE_URL,
        params: {
            q: params,
            apiKey: process.env.REACT_APP_API_KEY
        }
    }
    return axios(options).then(res=>res)
}
