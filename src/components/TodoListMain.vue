<template>
  <div>
    <h1>TODO LIST</h1><br>
    <todo-list-input @todoInput="todoInput"/>
    <ul>
      <li v-for="todo in todoList" :key="todo.id" :class="todo.checked ? 'checked' : ''">
        {{ todo.text }}
        <button @click="todoToggle(todo.id)">완료</button>
        <button @click="deleteTodo(todo.id)"> X </button>
      </li>
    </ul>
  </div>
</template>

<script>
import TodoListInput from "@/components/TodoListInput";

export default {
  name: "TodoList",
  components: {
    TodoListInput
  },
  data() {
    return {
      todoList: [
        {id: 1, checked: false, text: '1번 하기'},
        {id: 2, checked: false, text: '2번 하기'},
        {id: 3, checked: false, text: '3번 하기'}
      ]
    }
  },
  methods: {
    todoToggle(id) {
      var todo = this.todoList.find(todo => todo.id === id);
      todo.checked = !todo.checked;
      // if(todo.checked){
      //   todo.checked = false;
      //   // true = !false
      // } else {
      //   todo.checked = true;
      // }
    },
    deleteTodo(id) {
      var todoIndex = this.todoList.findIndex(todo => todo.id === id);
      this.todoList.splice(todoIndex, 1);
    },
    todoInput(todo) {
      var todoAdd = {
        id: this.todoList.length + 1,
        checked: false,
        text: todo
      }
      this.todoList.push(todoAdd);
    }
  }
}
</script>

<style scoped>
.checked {
  text-decoration: line-through
}
</style>