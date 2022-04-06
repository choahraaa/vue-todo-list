<template>
  <div>
    <h1>TODO LIST</h1><br>

    <input v-model="todoText" type="text" placeholder="입력해주세요.">
    <button @click="insertTodo">확인</button>
    <br>

    <ul>
      <li v-for="todo in todoList" :key="todo.id" :class="todo.checked ? 'checked' : ''">
        {{ todo.text }}
        <button @click="todoToggle(todo.id)">완료</button>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todoText: '',
      todo: {},
      todoList: [
        {id: 1, checked: false, text: '1번 하기'},
        {id: 2, checked: false, text: '2번 하기'},
        {id: 3, checked: false, text: '3번 하기'}
      ]
    }
  },
  methods: {
    todoToggle(id) {
      var todo = this.todoList.find(todo => todo.id === id);
      todo.checked = !todo.checked;
      // if(todo.checked){
      //   todo.checked = false;
      //   // true = !false
      // } else {
      //   todo.checked = true;
      // }
    },
    insertTodo() {
      var todo = {
        id: this.todoList.length + 1,
        checked: false,
        text: this.todoText
      }
      this.todoList.push(todo);
      this.todoText = '';
    }
  }
}
</script>

<style scoped>
.checked {
  text-decoration: line-through
}
</style>