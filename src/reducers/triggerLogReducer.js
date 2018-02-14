export function triggerLogReducer(state = {}, action) {
  switch(action.type) {
    case("INIT_TRIGGER_LOGS"):
      return {...state, ...action.payload}
    default:
      return state;
  }
}
