<template>
    <div class="pageA">
        <h1>pageA</h1>
        <h2>
            pageA {{ $store.state.a.money }}
        </h2>
        <br>
        <button @click="go">增加</button>
        <br>
        <button @click="back">减少</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
  export default {
    name: "Amy",
    methods: mapActions(['go','back'])
  }
</script>

<style scoped>

</style>