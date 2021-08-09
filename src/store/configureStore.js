import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'middlewares/logger'
import monitorReducerEnhancer from 'middlewares/monitorReducer'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from 'store/rootReducer'

export default function configureStore(preloadedState){
    const middleware = [thunkMiddleware]
    const enhancer = []
    
    if(process.env.NODE_ENV === 'development'){
        middleware.push(loggerMiddleware)
        enhancer.push(monitorReducerEnhancer)
    }
    const middlewareEnhancer = applyMiddleware(...middleware)

    const enhancer1 = [ ...enhancer, middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancer1)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)
    return store
}