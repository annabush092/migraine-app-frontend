export function userReducer(state = {id: 0, username: "defaultUser", firstName: "Default"}, action) {
  switch(action.type) {
    case("INIT_USER"):
      return {...state, ...action.payload}
    default:
      return state;
  }
}
