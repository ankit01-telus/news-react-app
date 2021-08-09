import {combineReducers} from 'redux'
import HomeReducer from 'pages/home/mutator/home.reducer'

export default combineReducers({
    all_news: HomeReducer
})