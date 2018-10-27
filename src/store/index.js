import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, STORAGE_KEY } from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  title: {
    content: 'Untitled Form', isEdit: false
  },
  description: {
    content: 'Untitled Description', isEdit: false
  },
  components: []
}

export default new Vuex.Store({
  state: {
    forms: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || JSON.stringify(state))
  },
  actions,
  mutations
})
