// @flow

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducer from '../Reducer/'

// const log = [thunk]
// if ( process.env.NODE_ENV === 'development'){
//   log.push(logger);
// }

// const middleware = applyMiddleware(...log)
const middleware = applyMiddleware(thunk)
const store = createStore(Reducer, middleware)

export default store
