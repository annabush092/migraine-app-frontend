export function triggerLogReducer(state = [], action) {
  switch(action.type) {
    case("INIT_TRIGGER_LOGS"):
      console.log("normalized trigger logs: ", action.payload)
      return [...state, ...action.payload]
    default:
      return state;
  }
}
