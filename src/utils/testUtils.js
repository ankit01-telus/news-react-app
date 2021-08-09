import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import rootReducer from 'store/rootReducer'


/**
 * The factory function that wrapp component with pass store and middleware
 * @param {*} ui component to pass args
 * @param {*} initialState initial state for store
 * @param {*} options 
 * @returns 
 */
const renderWrapper = (ui, initialState={}, options={}) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    const Wrapper = ({children}) => {
        return <Provider store={store}>{ children }</Provider>
    }   
    return render(ui, { wrapper:  Wrapper, ...options})
}

/**
 * The wrapper function that takes component and pass routes to browser to navigate to that page.
 * @param {*} ui component 
 * @param {string} param1 route for page
 * @returns 
 */
const renderWithRouter = (ui, { route="/" }= {}) => {
    window.history.pushState({}, 'Test page', route)

    return render(ui, { wrapper: BrowserRouter })
}

export { renderWrapper, renderWithRouter }

