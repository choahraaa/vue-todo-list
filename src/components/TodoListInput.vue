<template>
  <div>
    <input v-model="todoText" type="text" placeholder="입력해주세요.">
    <button @click="insertTodo">확인</button>
    <br>
  </div>
</template>

<script>
export default {
  name: "TodoListInput",
  data() {
    return {
      todoText: ''
    }
  },
  methods: {
    insertTodo() {
      this.$emit('todoInput', this.todoText);
      this.todoText = '';
    }
  }
}
</script>
