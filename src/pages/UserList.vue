<template>
    <div class="userList">
        <h2>这是用户列表</h2>
        <h3>{{ $route.params.userId }}</h3>
    </div>
</template>

<script>
  export default {
    name: "UserList"
  }
</script>

<style scoped>

</style>