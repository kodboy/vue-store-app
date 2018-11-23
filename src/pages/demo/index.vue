<template>
    <div>
        <h1>xxx</h1>
        <router-link to="/demo/counter">
            counter
        </router-link>
        <router-link to="/demo/cart">
            cart
        </router-link>
        <hr>
        <router-view/>
    </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>