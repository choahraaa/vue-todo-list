<template>
  <div>
    <h1>TODO LIST</h1><br>
    <todo-list-input @todoInput="todoInput"/>
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
  data() {
    return {
      todoList: [
        {id: 1, checked: false, text: '1번 하기'},
        {id: 2, checked: false, text: '2번 하기'},
        {id: 3, checked: false, text: '3번 하기'}
      ]
    }
  },
  methods: {
    todoToggle(todo) {
      todo.checked = !todo.checked;
      // if(todo.checked){
      //   todo.checked = false;
      //   // true = !false
      // } else {
      //   todo.checked = true;
      // }
    },
    deleteTodo(todo) {
      var todoIndex = this.todoList.indexOf(todo);
      this.todoList.splice(todoIndex, 1);
    },
    todoInput(todo) {
      var maxId = this.todoList.reduce((pre, cur) => {
        return Math.max(pre, cur.id)
      }, 0);

      var todoAdd = {
        id: maxId + 1,
        checked: false,
        text: todo
      }
      this.todoList.push(todoAdd);
    }
  }
}
</script>
