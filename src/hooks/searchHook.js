import {useState, useCallback} from 'react'
import {debounce} from 'lodash'
import {useDispatch} from 'react-redux'
import {HomeNewsAction} from 'pages/home/mutator/home.action'

/**
 * Search custom hook which accept search text, apply debounce and dispatch action
 * @returns {Array} searchText , handleSearch
 */
export function useSearch(){
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch()
    const handleSearch = (e)=> {
        let text = e.target.value
        setSearchText(text)
        debounceSearch(text)
    }
    // use debounce to prevent api call on every key press 
    const debounceSearch = useCallback(debounce((text) => {
        searchActionDispatcher(text)
    }, 300), [])

    const searchActionDispatcher = (text) => {
        if(text !== ''){
            dispatch(HomeNewsAction({params: text }))
            return false
        }
        dispatch(HomeNewsAction({params: 'latest' }))
    }

    return [searchText, handleSearch]
}