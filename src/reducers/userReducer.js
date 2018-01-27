function userReducer(state = {id: 1, name: "Anna"}, action) {
  switch(action.type) {
    case("INIT_USER"):
      return {...state, ...action.payload}
    default:
      return state;
  }
}

export {userReducer};
