
/**
 * logger factory function to print redux logs whenever action dispatch.
 * @param {object} store 
 * @returns {object} result
 */
const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('dispatching', action)
    const result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

export default logger