export default {
  addForm ({ commit }, form) {
    commit('addForm', {
      form
    })
  },
  removeForm ({ commit }, form) {
    commit('removeForm', form)
  },
  updateForm ({ commit }, form) {
    commit('updateForm', form)
  }
}
