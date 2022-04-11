import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {id: 1, checked: false, text: '1번 하기'},
      {id: 2, checked: false, text: '2번 하기'},
      {id: 3, checked: false, text: '3번 하기'}
    ]
  },
  getters: {
    todoList (state) {
      return state.todoList
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
