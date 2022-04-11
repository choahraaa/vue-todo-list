<template>
  <div>
    <h1>TODO LIST</h1><br>
    <todo-list-input/>
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
      this.$store.dispatch('todoToggle', todo.id);
    },
    deleteTodo(todo) {
      this.$store.dispatch('deleteTodo', todo);
    }
  }
}
</script>
