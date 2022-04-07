<template>
  <li :class="todo.checked ? 'checked' : ''">
    {{ todo.text }}
    <button>완료</button>
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
  }
}
</script>