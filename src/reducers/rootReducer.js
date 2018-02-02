import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

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
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ schema })))
)


// Order of things:
// Define schema (for triggers and triggerLogs)
// Call action to fetch user info from backend
// Within .then(), normalize the res.json() of the triggers and triggerLogs
//     const data = normalize(response, [ schema.entity ]);
// Then once you've normalized the data, use that in dispatch to add to the store.
//     dispatch(addEntities(data.entities));
