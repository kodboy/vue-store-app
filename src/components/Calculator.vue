<template>
    <div class="caculator">
        <h2> {{ result }}</h2>
        <h3 v-once>{{ result }}</h3>
        <button @click="increase">加一</button>
        <button v-on:click="decrease">减一</button>
    </div>
</template>

<script>
  export default {
    name: "Caculator",
    data() {
      return {
        result: 100
      }
    },
    methods: {
      increase() {
        this.result += 1
      },
      decrease() {
        this.result -= 2
      }
    }
  }
</script>

<style scoped>

</style>