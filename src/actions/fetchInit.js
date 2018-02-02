import { normalize } from 'normalizr';

import {initUser} from './userActions.js'
import {initMigraines} from './migraineActions.js'
import {initTriggers} from './triggerActions.js'
import {initTriggerLogs} from './triggerLogActions.js'
import {trigger, triggerLog} from '../reducers/schema.js'

export function fetchInit(userObj) {
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/users/${userObj.id}`)
    .then(res => res.json())
    .then(json => {
      dispatch(initUser({id: json.id, username: json.username, firstName: json.first_name}))
      dispatch(initMigraines(json.migraines))

      let normTriggerLogs = normalize(json.trigger_logs, [triggerLog])
      dispatch(initTriggerLogs(normTriggerLogs))

      let normTriggers = normalize(json.triggers, [trigger])
      dispatch(initTriggers(normTriggers))
    })
  }
}
