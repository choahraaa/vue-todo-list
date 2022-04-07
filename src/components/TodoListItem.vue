<template>
  <li :class="todo.checked ? 'checked' : ''">
    {{ todo.text }}
    <button @click="toggleButton(todo)">완료</button>
    <button> X </button>
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
    }
  }
}
</script>