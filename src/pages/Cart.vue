<template>
    <div class="cart">
        <h4>购物车组件</h4>
        <span>{{ $route.query.cartId }}</span>
    </div>
</template>

<script>
  export default {
    name: "Cart"
  }
</script>

<style scoped>

</style>