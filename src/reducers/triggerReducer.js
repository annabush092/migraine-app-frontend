export function triggerReducer(state = {}, action) {
  switch(action.type) {
    case("INIT_TRIGGERS"):
      console.log("normalized trigger data: ", action.payload)
      return {...state, ...action.payload}
    default:
      return state;
  }
}
