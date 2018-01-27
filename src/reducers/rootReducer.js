import {combineReducers, createStore} from 'redux'

import {userReducer} from './userReducer.js'

const rootReducer = combineReducers({
  user: userReducer
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__&&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)
