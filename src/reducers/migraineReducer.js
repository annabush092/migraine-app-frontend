export function migraineReducer(state = [{id: 0, severity: 0, start: "default entry"}], action) {
  switch(action.type) {
    case("INIT_MIGRAINES"):
      return [...state, ...action.payload]
    default:
      return state;
  }
}
