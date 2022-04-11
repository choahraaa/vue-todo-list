<template>
  <div>
    <h1>TODO LIST</h1><br>
    <todo-list-input @todoInput="todoInput"/>
    <todo-list :list="todoList" @todoToggle="todoToggle" @deleteTodo="deleteTodo"/>
  </div>
</template>

<script>
import TodoListInput from "@/components/TodoListInput";
import TodoList from "@/components/TodoList";

export default {
  name: "TodoListMain",
  components: {
    TodoListInput,
    TodoList
  },
  computed: {
    todoList() {
      return this.$store.getters.todoList
    }
  },
  methods: {
    todoToggle(todo) {
      this.$store.commit('todoToggle', todo.id);
    },
    deleteTodo(todo) {
      this.$store.commit('deleteTodo', todo);
    },
    todoInput(todo) {
      this.$store.commit('todoInput', todo);
    }
  }
}
</script>
