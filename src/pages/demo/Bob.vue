<template>
    <div class="pageB">
        <h1>pageB</h1>
        pageB {{ $store.state.b.count }}
        <button @click="oooo">add</button>
        <br>
        <button @click='xxxx'>xxx</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
  export default {
    name: "Bob",
    methods: mapActions(['oooo','xxxx'])
  }
</script>

<style scoped>

</style>