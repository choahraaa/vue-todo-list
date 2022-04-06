<template>
  <div id="app">
    <todo-list-main />
  </div>
</template>

<script>
import TodoListMain from "@/components/TodoListMain";

export default {
  name: 'App',
  components: {
    TodoListMain
  }
}
</script>
