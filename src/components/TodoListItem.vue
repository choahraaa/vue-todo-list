<template>
  <li :class="todo.checked ? 'checked' : ''">
    {{ todo.text }}
    <button @click="todoToggle(todo)">완료</button>
    <button @click="deleteTodo(todo)"> X </button>
  </li>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    todo: {
      type: Object
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

<style>
.checked {
  text-decoration: line-through
}
</style>