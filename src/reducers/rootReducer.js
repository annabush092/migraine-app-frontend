import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import {userReducer} from './userReducer.js'

const rootReducer = combineReducers({
  user: userReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ schema })))
)


// Order of things:
// Define schema
// Call action to fetch user info from backend
// Within .then(), normalize the res.json()
//     const data = normalize(response, [ schema.entity ]);
// Then once you've normalized the data, use that in dispatch to add to the store.
//     dispatch(addEntities(data.entities));
