<template>
  <div>
    <h1>TODO LIST</h1><br>

    <input type="text" placeholder="입력해주세요.">
    <button>확인</button>
    <br>

    <ul>
      <li v-for="todo in todoList" :key="todo.id" :class="todo.checked ? 'checked' : ''">
        {{ todo.text }}
        <button>완료</button>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todoList: [
        {id: 1, checked: false, text: '1번 하기'},
        {id: 2, checked: false, text: '2번 하기'},
        {id: 3, checked: false, text: '3번 하기'}
      ]
    }
  }
}
</script>

<style scoped>
.checked {
  text-decoration: line-through
}
</style>