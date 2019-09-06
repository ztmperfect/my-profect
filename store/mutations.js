export default {
  changeName(state, name) {
    state.UserName = name
    try {
      localStorage.name = name
    } catch (e) {}

  }
}