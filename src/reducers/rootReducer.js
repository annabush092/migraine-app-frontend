import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import * as schema from '../schema.js'
import {userReducer} from './userReducer.js'
import {migraineReducer} from './migraineReducer.js'
import {triggerReducer} from './triggerReducer.js'
import {triggerLogReducer} from './triggerLogReducer.js'

const rootReducer = combineReducers({
  user: userReducer, //{id: , username: "", firstName: ""}
  migraines: migraineReducer, //[ {id: , severity: , start: }, {}, {} ]
  triggers: triggerReducer, // [ ?? ]
  triggerLogs: triggerLogReducer // [ ?? ]
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(schema)))
)
