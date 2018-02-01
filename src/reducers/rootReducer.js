import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';


import {userReducer} from './userReducer.js'

const rootReducer = combineReducers({
  user: userReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({apiData, schema})))
)
