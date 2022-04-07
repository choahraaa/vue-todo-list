<template>
  <li :class="todo.checked ? 'checked' : ''">
    {{ todo.text }}
    <button @click="toggleButton(todo)">완료</button>
    <button @click="deleteButton(todo)"> X </button>
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
    toggleButton(todo) {
      this.$emit('itemToggleButton', todo);
    },
    deleteButton(todo) {
      this.$emit('itemDeleteButton', todo);
    }
  }
}
</script>