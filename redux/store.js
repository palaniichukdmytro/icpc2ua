import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

//Import the root reducer
import reducers from './rootReducer'

const enhancer = compose(applyMiddleware(thunk))

// Connect our store to the reducers
export default createStore(reducers, enhancer)
