<template>
    <div class="counter">
        <h1>
            数量是: {{ $store.state.count * 2 }}
        </h1>
        <br>
        <button type="button" @click="increment">增加</button>
        <br>
        <button type="button" @click="decrement">减少</button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "Counter",
    methods: mapActions(['increment', 'decrement'])
    // mapActions(['xxxmethod']) or this.$store.dispatch('xxxmethod')
  }
</script>

<style scoped>

</style>