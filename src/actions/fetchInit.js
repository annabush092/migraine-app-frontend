import { normalize } from 'normalizr';

import {initUser} from './userActions.js'
import {initMigraines} from './migraineActions.js'
import {initTriggers} from './triggerActions.js'
import {initTriggerLogs} from './triggerLogActions.js'
import {trigger, triggerLog} from '../reducers/schema.js'

export function fetchInit(userObj) {
  return function(dispatch, setState, schema) {
    fetch(`http://localhost:3000/api/v1/users/${userObj.id}`)
    .then(res => res.json())
    .then(json => {
      console.log("schema in fetchInit: ", schema)
      console.log("json in fetchInit: ", json.triggers)
      dispatch(initUser({id: json.id, username: json.username, firstName: json.first_name}))
      dispatch(initMigraines(json.migraines))
      let normTriggers = normalize(json.triggers, [trigger])
      dispatch(initTriggers(normTriggers))
      let normTriggerLogs = normalize(json.trigger_logs, [triggerLog])
      dispatch(initTriggerLogs(normTriggerLogs))
    })
  }
}
