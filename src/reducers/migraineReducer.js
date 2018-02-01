export function migraineReducer(state = [], action) {
  switch(action.type) {
    case("INIT_MIGRAINES"):
      return {...state, ...action.payload}
    default:
      return state;
  }
}
