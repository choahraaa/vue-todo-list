<template>
  <div>
    <ul>
      <todo-list-item v-for="todo in list" :key="todo.id" :todo="todo" @itemToggleButton="itemToggleButton" @itemDeleteButton="itemDeleteButton" />
    </ul>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";

export default {
  name: "TodoList",
  components: {
    TodoListItem
  },
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    itemToggleButton(todo) {
      this.$emit("todoToggle", todo);
    },
    itemDeleteButton(todo) {
      this.$emit("deleteTodo", todo);
    }
  }
}
</script>
