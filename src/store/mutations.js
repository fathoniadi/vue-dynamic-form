export const STORAGE_KEY = 'dynamic-form'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const mutations = {
  addForm (state, form) {
    state.forms.push(form)
  },

  removeForm (state, form) {
    state.forms.splice(state.forms.indexOf(form), 1)
  },
  updateForm (state, form) {
    state.forms = form
  }
}
