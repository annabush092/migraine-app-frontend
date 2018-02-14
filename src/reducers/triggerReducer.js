export function triggerReducer(state = {}, action) {
  switch(action.type) {
    case("INIT_TRIGGERS"):
      return {...state, ...action.payload}
    default:
      return state;
  }
}
