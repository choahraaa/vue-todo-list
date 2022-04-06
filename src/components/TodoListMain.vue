<template>
  <div>
    <h1>TODO LIST</h1><br>

    <input type="text" placeholder="입력해주세요.">
    <button>확인</button><br>

    <ul>
      <li>1번 하기 <button>완료</button></li>
      <li>2번 하기 <button>완료</button></li>
      <li>3번 하기 <button>완료</button></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "TodoList"
}
</script>

<style scoped>

</style>