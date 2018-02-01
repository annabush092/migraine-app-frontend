export function userReducer(state = {id: 0, username: "defaultUser", first_name: "Default"}, action) {
  switch(action.type) {
    case("INIT_USER"):
      return {...state, ...action.payload}
    default:
      return state;
  }
}
