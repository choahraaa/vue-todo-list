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
        todoList(state) {
            return state.todoList
        }
    },
    mutations: {
        todoToggle (state, id) {
            var todo = state.todoList.find(todo => todo.id === id)
            todo.checked = !todo.checked;
        },
        deleteTodo (state, todo) {
            var todoIndex = state.todoList.indexOf(todo);
            state.todoList.splice(todoIndex, 1);
        },
        todoInput (state, todo) {
            var maxId = state.todoList.reduce((pre, cur) => {
                return Math.max(pre, cur.id)
            }, 0);

            var todoAdd = {
                id: maxId + 1,
                checked: false,
                text: todo
            }
            state.todoList.push(todoAdd);
        }
    },
    actions: {
        todoToggle (context, id) {
            context.commit('todoToggle', id);
        },
        deleteTodo ({commit}, todo) {
            commit('deleteTodo', todo);
        },
        todoInput ({commit}, todo) {
            if('' === todo) {
                alert('내용을 입력해주세요.');
                return false;
            } else {
                commit('todoInput', todo);
            }
        }
    },
    modules: {}
})
